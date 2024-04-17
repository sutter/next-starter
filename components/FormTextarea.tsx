"use client"

import { TextArea, TextAreaProps } from "react-aria-components"

import { cn } from "@lib/utils"

export interface FormTextareaProps extends TextAreaProps {}

const FormTextarea = ({ className, ...rest }: FormTextareaProps) => {
  return (
    <TextArea
      className={cn(
        "ra-focus-ring block w-full rounded-md border-0 ring-1 ring-inset  transition data-[focused=true]:ring-2 data-[focus-visible=true]:ring-1 text-gray-900 ring-input placeholder:text-input-placeholder data-[focused=true]:ring-primary data-[focus-visible=true]:ring-input invalid:ring-error invalid:text-error invalid:placeholder-error-400 invalid:bg-error-50 disabled:bg-input-disabled",
        "px-3 py-1.5 text-sm",
        className
      )}
      {...rest}
    />
  )
}

export default FormTextarea
