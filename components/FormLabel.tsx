"use client"

import { Label, LabelProps } from "react-aria-components"
import { cn } from "@lib/utils"
import React from "react"

export interface FormLabelProps extends LabelProps {
  children: React.ReactNode
}

const FormLabel = ({ className, children, ...rest }: FormLabelProps) => {
  return (
    <Label
      className={cn(
        "block text-sm font-medium leading-6 text-gray-900",
        className
      )}
      {...rest}
    >
      {children}
    </Label>
  )
}

export default FormLabel
