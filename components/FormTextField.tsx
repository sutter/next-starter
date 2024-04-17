import { TextField, TextFieldProps } from "react-aria-components"

import { cn } from "@lib/utils"
import FormLabel, { FormLabelProps } from "./FormLabel"
import FormInput, { FormInputProps } from "./FormInput"
import { ReactNode } from "react"

interface FormTextFieldProps extends TextFieldProps {
  labelProps: FormLabelProps
  inputProps: FormInputProps
  /**
   * Add a description to the field
   */
  description?: ReactNode
  /**
   * Add error messages to the field
   */
  errorMessages?: ReactNode
}

const FormTextField = ({
  labelProps,
  inputProps,
  className,
  description,
  errorMessages,
  ...rest
}: FormTextFieldProps) => {
  return (
    <TextField className={cn("space-y-1", className)} {...rest}>
      <FormLabel {...labelProps} />
      <FormInput {...inputProps} />
      {description && <div className="text-sm text-gray">{description}</div>}
      {errorMessages && (
        <div className="text-sm text-error">{errorMessages}</div>
      )}
    </TextField>
  )
}

export default FormTextField
