import React, { forwardRef } from "react";
import clsx from "clsx";

interface Props
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  as?: React.ElementType;
  className?: string;
}

export const Container = forwardRef<HTMLElement, Props>(
  ({ as: Component = "section", className, children, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...rest}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Component>
    );
  }
);

Container.displayName = "Container";
