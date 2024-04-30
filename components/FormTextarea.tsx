"use client";

import { composeRenderProps, TextArea, TextAreaProps } from "react-aria-components";
import { tv } from "tailwind-variants";

import { fieldBasicStyles } from "../lib/utils";
import { FieldSize } from "./types";

const styles = tv({
  extend: fieldBasicStyles,
});

export interface FormTextareaProps extends TextAreaProps {
  /**
   * The size of the field
   */
  size?: FieldSize;
}

const FormTextarea = ({ className, size, ...rest }: FormTextareaProps) => {
  return (
    <TextArea
      className={composeRenderProps(className, (className, renderProps) =>
        styles({ ...renderProps, size: size, className }),
      )}
      {...rest}
    />
  );
};

export default FormTextarea;
