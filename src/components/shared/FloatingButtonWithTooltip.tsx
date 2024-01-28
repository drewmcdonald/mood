import { type LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@mood/components/ui/tooltip";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@mood/utils";
import * as React from "react";

interface FloatingButtonWithTooltipProps {
  tooltip: string;
  className?: string;
  position?: string;
  Icon: LucideIcon;
}

const FloatingButtonWithTooltip = React.forwardRef<
  React.ElementRef<typeof Button>,
  FloatingButtonWithTooltipProps & ButtonProps
>(({ tooltip, className, position, Icon, ...props }, ref) => (
  <Tooltip>
    <TooltipTrigger className={position} asChild>
      <Button
        ref={ref}
        aria-label={tooltip}
        className={cn(
          `h-16 w-16 animate-fade-in-95 rounded-full bg-slate-200 opacity-95 shadow-md transition-all duration-300 ease-in-out hover:-translate-x-3 hover:scale-105 hover:bg-current hover:bg-opacity-95 hover:shadow-xl dark:bg-slate-700`,
          className,
        )}
        {...props}
      >
        <Icon className="size-7 stroke-primary stroke-1 dark:stroke-primary-foreground" />
      </Button>
    </TooltipTrigger>
    <TooltipContent
      side="left"
      className="animate-fade-in-95 opacity-95 shadow-md"
    >
      {tooltip}
    </TooltipContent>
  </Tooltip>
));
FloatingButtonWithTooltip.displayName = "FloatingButtonWithTooltip";
export { FloatingButtonWithTooltip };
