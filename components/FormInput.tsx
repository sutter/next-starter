"use client";

import { composeRenderProps, Input, InputProps } from "react-aria-components";
import { tv } from "tailwind-variants";

import { fieldBasicStyles } from "@lib/utils";
import { FieldSize } from "./types";

export const styles = tv({
  extend: fieldBasicStyles,
});

export interface FormInputProps extends Omit<InputProps, "size"> {
  /**
   * The size of the field
   */
  size?: FieldSize;
}

const FormInput = ({ className, size, ...rest }: FormInputProps) => {
  return (
    <Input
      className={composeRenderProps(className, (className, renderProps) =>
        styles({ ...renderProps, size: size, className }),
      )}
      {...rest}
    />
  );
};

export default FormInput;
