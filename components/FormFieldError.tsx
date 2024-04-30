import { FieldError, FieldErrorProps } from "react-aria-components";
import { cn } from "../lib/utils";

interface FormFieldErrorProps extends FieldErrorProps {}

const FormFieldError = (props: FormFieldErrorProps) => {
  return <FieldError {...props} className={cn(props.className, "text-sm text-error")} />;
};

export default FormFieldError;
