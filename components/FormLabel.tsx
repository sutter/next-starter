"use client";

import { Label, LabelProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { cn } from "../lib/utils";

const styles = tv({
  base: "block text-sm font-medium leading-6 text-gray-900",
});

export interface FormLabelProps extends LabelProps {}

const FormLabel = (props: FormLabelProps) => {
  return <Label {...props} slot="label" className={cn(props.className, styles)} />;
};

export default FormLabel;
