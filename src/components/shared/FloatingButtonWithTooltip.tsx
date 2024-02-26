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
        variant="secondary"
        className={cn(
          `h-16 w-16 animate-fade-in-95 rounded-full opacity-95 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-95 hover:shadow-xl`,
          className,
        )}
        {...props}
      >
        <Icon className="size-full stroke-gunmetal-50 stroke-[1.5]" />
      </Button>
    </TooltipTrigger>
    <TooltipContent
      side="left"
      className="animate-fade-in-95 border-none bg-gunmetal-100 text-gunmetal-900 opacity-95 shadow-md"
    >
      {tooltip}
    </TooltipContent>
  </Tooltip>
));
FloatingButtonWithTooltip.displayName = "FloatingButtonWithTooltip";
export { FloatingButtonWithTooltip };
