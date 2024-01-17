import { useSbClient } from "@mood/hooks/useSbClient";
import { LogOut } from "lucide-react";
import { FloatingButtonWithTooltip } from "./shared/FloatingButtonWithTooltip";

export function LogOutButton() {
  const client = useSbClient();
  return (
    <FloatingButtonWithTooltip
      tooltip="Log out"
      className="fixed bottom-8 right-8 cursor-pointer"
      onClick={() => void client.auth.signOut()}
      Icon={LogOut}
    />
  );
}
