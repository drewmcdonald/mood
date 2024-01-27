import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@mood/components/ui/card";
import { SignInFormSms } from "./SignInFormSms";

export default function SignInCard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <SignInFormSms />
      </CardContent>
    </Card>
  );
}
