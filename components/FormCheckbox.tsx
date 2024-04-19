"use client"

import { PropsWithChildren } from "react"
import { tv } from "tailwind-variants"
import { Checkbox, CheckboxProps } from "react-aria-components"

import { cn } from "@lib/utils"

const formCheckboxStyles = tv({
  slots: {
    base: "group inline-flex items-center gap-2",
    checkbox:
      "flex items-center justify-center w-4 h-4 ring-1 ring-input bg-white rounded-sm group-selected:bg-primary transition group-selected:ring-primary  group-indeterminate:ring-primary-200 group-indeterminate:bg-primary-100 group-indeterminate:relative group-indeterminate:before:content[''] group-indeterminate:before:block group-indeterminate:before:h-[2px] group-indeterminate:before:w-2 group-indeterminate:before:bg-primary group-indeterminate:before:absolute group-indeterminate:before:rounded  group-focused:outline-none group-focus-visible:outline group-focus-visible:outline-4 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary/50 group-disabled:bg-input-disabled group-invalid:ring-error group-invalid:bg-error-50 group-disabled:group-selected:ring-input",
    svg: "relative w-3 h-3 fill-none stroke-primary stroke-[3px] [stroke-dasharray:66px] [stroke-dashoffset:66] transition-all group-selected:[stroke-dashoffset:0] group-selected:stroke-white group-indeterminate:stroke-none group-disabled:group-selected:stroke-gray-400",
  },
})

const { base, checkbox, svg } = formCheckboxStyles()

interface FormCheckboxProps extends CheckboxProps {}

const FormCheckbox = ({
  className,
  children,
  ...rest
}: PropsWithChildren<FormCheckboxProps>) => {
  return (
    <Checkbox className={cn(base(), className)} {...rest}>
      <div className={checkbox()}>
        <svg className={svg()} viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </Checkbox>
  )
}

export default FormCheckbox
