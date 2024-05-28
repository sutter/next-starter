"use client";

import { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { Checkbox, CheckboxProps, composeRenderProps } from "react-aria-components";

import { focusRingStyles } from "../lib/utils";

const styles = tv({
  extend: focusRingStyles,
  base: "flex items-center gap-2",
  slots: {
    checkbox: "flex items-center justify-center w-4 h-4 ring-1 ring-input rounded-sm transition",

    svg: "relative w-3 h-3 fill-none stroke-[3px] transition-all",
  },
  variants: {
    isSelected: {
      true: {
        checkbox: "bg-primary ring-primary",
        svg: "stroke-white",
      },
      false: {
        checkbox: "bg-white",
        svg: "stroke-transparent",
      },
    },
    isInvalid: {
      true: {
        checkbox: "ring-error bg-error-50",
      },
    },
    isIndeterminate: {
      true: {
        checkbox:
          "ring-primary-200 bg-primary-100 relative before:content[''] before:block before:h-[2px] before:w-2 before:bg-primary before:absolute before:rounded",
        svg: "stroke-none",
      },
    },
    isDisabled: {
      true: {
        checkbox: "bg-input-disabled",
      },
    },
  },
  compoundVariants: [
    {
      isInvalid: true,
      isSelected: true,
      class: {
        checkbox: "bg-primary ring-primary",
      },
    },
    {
      isDisabled: true,
      isSelected: true,
      class: {
        checkbox: "bg-input ring-input",
      },
    },
  ],
});

const { checkbox, svg, base } = styles();

interface FormCheckboxProps extends CheckboxProps {}

const FormCheckbox = ({ className, children, ...rest }: PropsWithChildren<FormCheckboxProps>) => {
  return (
    <Checkbox
      className={composeRenderProps(className, (className, renderProps) => base({ ...renderProps, className }))}
      {...rest}
    >
      {({ isInvalid, isDisabled, isIndeterminate, isSelected }) => (
        <>
          <div
            className={checkbox({
              isInvalid,
              isDisabled,
              isIndeterminate,
              isSelected,
            })}
          >
            <svg
              className={svg({
                isInvalid,
                isDisabled,
                isIndeterminate,
                isSelected,
              })}
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              <polyline points="1 9 7 14 15 4" />
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  );
};

export default FormCheckbox;
