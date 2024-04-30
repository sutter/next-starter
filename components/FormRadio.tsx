"use client";

import { Radio, RadioProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { cn, focusRingStyles } from "../lib/utils";

const styles = tv({
  extend: focusRingStyles,
  base: "w-5 h-5 rounded-full border-2 bg-white transition-all",
  variants: {
    isSelected: {
      false: "border-input group-pressed:border-gray-500",
      true: "border-[7px] border-primary group-pressed:border-primary-900",
    },
    isInvalid: {
      true: "border-error bg-error-50 group-pressed:border-error-900",
    },
    isDisabled: {
      true: "border-input",
    },
  },
});

interface FormRadioProps extends RadioProps {}

const FormRadio = (props: FormRadioProps) => {
  return (
    <Radio
      {...props}
      className={cn(props.className, "flex gap-2 items-center group disabled:text-gray-300 text-sm transition ")}
    >
      {renderProps => (
        <>
          <div className={styles(renderProps)} />
          {props.children}
        </>
      )}
    </Radio>
  );
};

export default FormRadio;
