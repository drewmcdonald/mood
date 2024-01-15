// Adapted from https://github.com/gkaemmer/react-fade-in
import React, { PropsWithChildren, useEffect, useState } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => void;
}

export default function FadeIn({
  transitionDuration = 400,
  delay = 50,
  visible = true,
  onComplete,
  className,
  childClassName,
  children,
}: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  const baseCount = React.Children.count(children);

  useEffect(() => {
    let count = baseCount;
    if (!visible) {
      // Animate all children out
      count = 0;
    }

    if (count == maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, transitionDuration);
      return () => {
        clearTimeout(timeout);
      };
    }

    // Move maxIsVisible toward count
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [baseCount, onComplete, delay, maxIsVisible, visible, transitionDuration]);

  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => {
        return (
          <div
            className={childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform:
                maxIsVisible > i
                  ? "none"
                  : "translateX(-10px) translateY(-20px)",
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
