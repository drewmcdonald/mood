import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@mood/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@mood/components/ui/form";
import { Input } from "@mood/components/ui/input";
import { useSbClient } from "@mood/hooks/useSbClient";
import { useState } from "react";

const PhoneFormSchema = z.object({
  phone: z
    .string()
    .transform((s) => s.replace(/\D/g, "")) // strip non-digits
    .refine((s) => s.length === 10, "Phone number must be 10 digits")
    .transform((s) => `+1${s}`), // required formatting for twilio verify
});
type PhoneForm = z.infer<typeof PhoneFormSchema>;

export function PhoneForm({ setPhone }: { setPhone: (p: string) => void }) {
  const client = useSbClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<PhoneForm>({
    resolver: zodResolver(PhoneFormSchema),
    defaultValues: { phone: "" },
  });

  async function onSubmit({ phone }: PhoneForm) {
    setIsSubmitting(true);
    const result = await client.auth.signInWithOtp({ phone });

    if (result.error) {
      console.error(result.error);
      form.setError("phone", { message: result.error.message });
    } else {
      setPhone(phone);
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="default"
          className="w-full"
          disabled={isSubmitting}
        >
          Send one-time code
        </Button>
      </form>
    </Form>
  );
}
