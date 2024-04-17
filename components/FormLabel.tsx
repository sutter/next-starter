import { Label, LabelProps } from "react-aria-components"
import { cn } from "@lib/utils"

export interface FormLabelProps extends LabelProps {}

const FormLabel = ({ className, ...rest }: FormLabelProps) => {
  return (
    <Label
      className={cn(
        "block text-sm font-medium leading-6 text-gray-900",
        className
      )}
      {...rest}
    />
  )
}

export default FormLabel
