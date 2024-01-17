import { type LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@mood/components/ui/tooltip";
import { Button } from "../ui/button";
import { cn } from "@mood/utils";

export function FloatingButtonWithTooltip({
  tooltip,
  onClick,
  className,
  Icon,
}: {
  tooltip: string;
  onClick: () => void;
  className?: string;
  Icon: LucideIcon;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className={cn("cursor-pointer", className)}>
        <Button
          aria-label={tooltip}
          className="h-16 w-16 animate-fade-in-95 rounded-full bg-slate-200 p-3 opacity-95 shadow-md transition-all duration-300 ease-in-out hover:-translate-x-3 hover:scale-105 hover:bg-current hover:bg-opacity-95 hover:shadow-xl dark:bg-slate-700"
          onClick={onClick}
        >
          <Icon className="stroke-primary stroke-1" />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="left"
        className="text-md mr-4 animate-fade-in-95 text-primary opacity-95 shadow-md"
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
