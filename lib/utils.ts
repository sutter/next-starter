import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const focusRingStyles = tv({
  base: "outline outline-primary outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

export const fieldBasicStyles = tv({
  extend: focusRingStyles,
  base: "block w-full border-0 ring-1 ring-inset ring-input text-gray-900 rounded-md transition placeholder:text-input-placeholder",
  variants: {
    size: {
      xs: "px-2 py-1 text-xs",
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2.5 text-sm",
    },
    isDisabled: {
      true: "bg-input-disabled",
    },
    isInvalid: {
      true: "placeholder-error-400 bg-error-50 ring-error text-error",
    },
    isFocused: {
      true: "ring-2 ring-primary",
    },
    isFocusVisible: {
      true: "outline-primary/50",
    },
  },
  defaultVariants: {
    size: "md",
    state: "default",
  },
});
