"use client"

import { Input, InputProps } from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "@lib/utils"

export const inputStyles = tv({
  base: "ra-focus-ring block w-full rounded-md border-0 ring-1 ring-inset  transition data-[focused=true]:ring-2 data-[focus-visible=true]:ring-1 text-gray-900 ring-input placeholder:text-input-placeholder data-[focused=true]:ring-primary data-[focus-visible=true]:ring-input invalid:ring-error invalid:text-error invalid:placeholder-error-400 invalid:bg-error-50 disabled:bg-input-disabled",
  variants: {
    size: {
      xs: "px-2 py-1 text-xs",
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2.5 text-sm",
    },
  },
  defaultVariants: {
    size: "md",
    state: "default",
  },
})

export interface FormInputProps extends Omit<InputProps, "size"> {
  /**
   * The size of the input
   */
  size?: "xs" | "sm" | "md" | "lg"
}

const FormInput = ({ className, size, ...rest }: FormInputProps) => {
  return <Input className={cn(inputStyles({ size }), className)} {...rest} />
}

export default FormInput
