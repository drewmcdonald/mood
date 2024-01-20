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
import { useState } from "react";

export default function SignInCard({ className }: { className?: string }) {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">
          Sign {isSignUp ? "up" : "in"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      </CardContent>
    </Card>
  );
}
