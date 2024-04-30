"use client";

import { ReactNode, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { RadioGroup, RadioGroupProps } from "react-aria-components";

import { cn } from "../lib/utils";
import FormLabel from "./FormLabel";
import FormFieldDescription from "./FormFieldDescription";
import FormFieldError from "./FormFieldError";

const formRadioGroupStyles = tv({
  slots: {
    base: "group space-y-2",
    checkboxWrapper: "flex group-orientation-vertical:flex-col gap-1 group-orientation-horizontal:gap-4",
  },
});

const { base, checkboxWrapper } = formRadioGroupStyles();

interface FormRadioGroupProps extends RadioGroupProps {
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

const FormRadioGroup = ({
  className,
  children,
  label,
  description,
  errorMessages,
  ...rest
}: PropsWithChildren<FormRadioGroupProps>) => {
  return (
    <RadioGroup className={cn(className, base())} {...rest}>
      <FormLabel>{label}</FormLabel>
      <div className={checkboxWrapper()}>{children}</div>
      {description && <FormFieldDescription>{description}</FormFieldDescription>}
      {errorMessages && <FormFieldError>{errorMessages}</FormFieldError>}
    </RadioGroup>
  );
};

export default FormRadioGroup;
