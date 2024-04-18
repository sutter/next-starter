"use client"

import { PropsWithChildren, ReactNode } from "react"
import { TextField, TextFieldProps, FieldError } from "react-aria-components"

import { cn } from "@lib/utils"
import FormLabel, { FormLabelProps } from "./FormLabel"
import FormMessage from "./FormMessage"

interface FormGroupProps extends TextFieldProps {
  labelProps: FormLabelProps
  /**
   * Add a description to the field
   */
  description?: ReactNode
  /**
   * Add error messages to the field
   */
  errorMessages?: ReactNode
}

const FormGroup = ({
  labelProps,
  className,
  description,
  errorMessages,
  children,
  ...rest
}: PropsWithChildren<FormGroupProps>) => {
  return (
    <TextField className={cn("space-y-1", className)} {...rest}>
      <FormLabel {...labelProps} />
      {children}
      {description && <FormMessage>{description}</FormMessage>}
      {errorMessages && (
        <FormMessage as={FieldError} color="error">
          {errorMessages}
        </FormMessage>
      )}
    </TextField>
  )
}

export default FormGroup
