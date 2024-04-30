import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

interface FormFieldDescriptionProps {
  /**
   * Add a class to the field
   */
  className?: string;
}

const FormFieldDescription = (props: PropsWithChildren<FormFieldDescriptionProps>) => {
  return <div {...props} slot="description" className={cn("text-sm text-gray", props.className)} />;
};

export default FormFieldDescription;
