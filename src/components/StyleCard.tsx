import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@mood/components/ui/card";
import { SignInFormSms } from "./SignIn/SignInFormSms";
import { Button } from "./ui/button";
import { FloatingButtonWithTooltip } from "./shared/FloatingButtonWithTooltip";
import { LightbulbIcon } from "lucide-react";

export default function StyleCard() {
  return (
    <div className="height-screen flex justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInFormSms />
          <Button className="mt-4 w-full" variant="secondary">
            Secondary
          </Button>
          <Button className="mt-4 w-full" variant="accent">
            Accent
          </Button>
          <Button className="mt-4 w-full" variant="destructive">
            Destructive
          </Button>
          <div className="flex justify-center pt-4 align-middle">
            <FloatingButtonWithTooltip tooltip="Hi mom" Icon={LightbulbIcon} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
