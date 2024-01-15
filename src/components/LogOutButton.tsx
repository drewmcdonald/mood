import { useSbClient } from "@mood/hooks/useSbClient";
import { LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@mood/components/ui/tooltip";
import { Button } from "./ui/button";

export function LogOutButton() {
  const client = useSbClient();
  return (
    <Tooltip>
      <TooltipTrigger className="fixed bottom-8 right-8 cursor-pointer">
        <Button
          className="shadow-md6 h-16 w-16 rounded-full bg-slate-200 p-3 opacity-85 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:scale-110 hover:bg-current hover:bg-opacity-95 hover:shadow-xl dark:bg-slate-700"
          onClick={() => void client.auth.signOut()}
        >
          <LogOut className="stroke-primary stroke-1" />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="left"
        className="text-md mb-2 mr-3 animate-fade-in text-primary opacity-85 shadow-md"
      >
        Log out
      </TooltipContent>
    </Tooltip>
  );
}
