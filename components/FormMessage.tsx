import { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { cn } from "@lib/utils";

const styles = tv({
  base: "text-sm",
  variants: {
    color: {
      default: "text-gray",
      error: "text-error",
      success: "text-success",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

interface FormMessageProps {
  /**
   * Additional classes to add
   */
  className?: string;
  /**
   * The color of the message
   */
  color?: "default" | "error" | "success";
  /**
   * The element to render the message as
   */
  as?: React.ElementType;
}

const FormMessage = ({
  className,
  color,
  children,
  as: Component = "div",
  ...rest
}: PropsWithChildren<FormMessageProps>) => {
  return (
    <Component className={cn(styles({ color }), className)} {...rest}>
      {children}
    </Component>
  );
};

export default FormMessage;
