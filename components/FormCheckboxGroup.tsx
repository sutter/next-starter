"use client"

import { ReactNode, PropsWithChildren } from "react"
import { tv } from "tailwind-variants"
import {
  CheckboxGroup,
  CheckboxGroupProps,
  FieldError,
} from "react-aria-components"

import { cn } from "@lib/utils"
import FormLabel, { FormLabelProps } from "./FormLabel"
import FormMessage from "./FormMessage"

const formCheckboxGroupStyles = tv({
  slots: {
    base: "group",
    checkboxWrapper: "flex flex-col gap-1 my-1",
  },
})

const { base, checkboxWrapper } = formCheckboxGroupStyles()

interface FormCheckboxGroupProps extends CheckboxGroupProps {
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

const FormCheckboxGroup = ({
  className,
  children,
  labelProps,
  description,
  errorMessages,
  ...rest
}: PropsWithChildren<FormCheckboxGroupProps>) => {
  return (
    <CheckboxGroup className={cn(base(), className)} {...rest}>
      <FormLabel {...labelProps} />
      <div className={cn(checkboxWrapper())}>{children}</div>
      {description && <FormMessage>{description}</FormMessage>}
      {errorMessages && (
        <FormMessage as={FieldError} color="error">
          {errorMessages}
        </FormMessage>
      )}
    </CheckboxGroup>
  )
}

export default FormCheckboxGroup
