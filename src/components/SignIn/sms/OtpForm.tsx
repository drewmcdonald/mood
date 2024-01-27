import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";
import * as z from "zod";

const OtpFormSchema = z.object({ token: z.string() });
export type OtpForm = z.infer<typeof OtpFormSchema>;

export function OtpForm({ phone }: { phone: string }) {
  const client = useSbClient();
  const form = useForm<OtpForm>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: { token: "" },
  });

  async function onSubmit({ token }: OtpForm) {
    const result = await client.auth.verifyOtp({ phone, token, type: "sms" });
    if (result.error) {
      console.error(result.error);
      form.setError("token", { message: result.error.message });
    }
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoFocus
                  autoComplete="one-time-code"
                  type="string"
                  placeholder="xxxxxx"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="w-full">
          Log in
        </Button>
      </form>
    </Form>
  );
}
