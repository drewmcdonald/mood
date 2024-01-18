/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BGgKsLZMHO4
 */
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@mood/components/ui/card";
import { SignInForm } from "./SignInForm";
import { Button } from "./ui/button";
import { GitHubIcon } from "./vend/GitHubIcon";
import { GoogleIcon } from "./vend/GoogleIcon";
import { Separator } from "./ui/separator";
import { useSbClient } from "@mood/hooks/useSbClient";

export default function SignInCard({ className }: { className?: string }) {
  const client = useSbClient();
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="mb-2 w-full" disabled>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="mb-4 w-full"
          onClick={() =>
            void client.auth.signInWithOAuth({ provider: "github" })
          }
        >
          <GitHubIcon className="mr-2 h-4 w-4" />
          Sign in with GitHub
        </Button>
        <Separator />
        <div className="mb-4 w-full  border-gray-100" />
        <SignInForm />
        <Button variant="outline" className=" mt-2 w-full" disabled>
          Sign up
        </Button>
      </CardContent>
    </Card>
  );
}
