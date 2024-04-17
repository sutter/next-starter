import { PropsWithChildren } from "react"
import { tv } from "tailwind-variants"

import { cn } from "@lib/utils"

const FormMessageStyles = tv({
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
})

interface FormMessageProps {
  /**
   * Additional classes to add
   */
  className?: string
  /**
   * The color of the message
   */
  color?: "default" | "error" | "success"
}

const FormMessage = ({
  className,
  color,
  children,
  ...rest
}: PropsWithChildren<FormMessageProps>) => {
  return (
    <div className={cn(FormMessageStyles({ color }), className)} {...rest}>
      {children}
    </div>
  )
}

export default FormMessage
