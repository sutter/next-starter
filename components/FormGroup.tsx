"use client";

import { PropsWithChildren, ReactNode } from "react";
import { TextField, TextFieldProps } from "react-aria-components";

import { cn } from "../lib/utils";
import FormLabel from "./FormLabel";
import FormFieldDescription from "./FormFieldDescription";
import FormFieldError from "./FormFieldError";

interface FormGroupProps extends TextFieldProps {
  /**
   * Props for the label component
   */
  label: string;
  /**
   * Add a description to the field
   */
  description?: ReactNode;
  /**
   * Add error messages to the field
   */
  errorMessages?: ReactNode;
}

const FormGroup = ({
  label,
  className,
  description,
  errorMessages,
  children,
  ...rest
}: PropsWithChildren<FormGroupProps>) => {
  return (
    <TextField className={cn(className, "space-y-1")} {...rest}>
      <FormLabel>{label}</FormLabel>
      {children}
      {description && <FormFieldDescription>{description}</FormFieldDescription>}
      {errorMessages && <FormFieldError>{errorMessages}</FormFieldError>}
    </TextField>
  );
};

export default FormGroup;
