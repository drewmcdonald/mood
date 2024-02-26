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

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function SignInFormEmail({
  isSignUp,
  setIsSignUp,
}: {
  isSignUp: boolean;
  setIsSignUp: (isSignUp: boolean) => void;
}) {
  const client = useSbClient();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit({ email, password }: z.infer<typeof FormSchema>) {
    if (isSignUp)
      client.auth.signUp({ email, password }).catch((error) => {
        console.error(error);
      });
    else
      client.auth
        .signInWithPassword({ email, password })
        .then(({ data, error }) => {
          console.log(data);
          console.error(error);
        })
        .catch((error) => {
          console.error(error);
        });
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="you@hello.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="w-full">
          {isSignUp ? "Sign up" : "Log in"}
        </Button>
        <div className="pt-2 text-center text-xs text-muted">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          &nbsp;
          <a
            className="cursor-pointer text-foreground underline"
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp ? "Log in" : "Sign up"}
          </a>
        </div>
      </form>
    </Form>
  );
}
