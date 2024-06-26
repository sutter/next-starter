"use client";

import { ReactNode, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { CheckboxGroup, CheckboxGroupProps } from "react-aria-components";

import { cn } from "../lib/utils";
import FormLabel from "./FormLabel";
import FormFieldDescription from "./FormFieldDescription";
import FormFieldError from "./FormFieldError";

const styles = tv({
  slots: {
    base: "group",
    checkboxWrapper: "flex flex-col gap-1 my-1",
  },
});

const { base, checkboxWrapper } = styles();

interface FormCheckboxGroupProps extends CheckboxGroupProps {
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

const FormCheckboxGroup = ({
  className,
  children,
  label,
  description,
  errorMessages,
  ...rest
}: PropsWithChildren<FormCheckboxGroupProps>) => {
  return (
    <CheckboxGroup className={cn(className, base())} {...rest}>
      <FormLabel>{label}</FormLabel>
      <div className={checkboxWrapper()}>{children}</div>
      {description && <FormFieldDescription>{description}</FormFieldDescription>}
      {errorMessages && <FormFieldError>{errorMessages}</FormFieldError>}
    </CheckboxGroup>
  );
};

export default FormCheckboxGroup;
