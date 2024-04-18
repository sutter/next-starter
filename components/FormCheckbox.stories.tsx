import type { Meta, StoryObj } from "@storybook/react"
import FormCheckbox from "./FormCheckbox"

const meta: Meta<typeof FormCheckbox> = {
  title: "FormCheckbox",
  component: FormCheckbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormCheckbox>

export const Default: Story = {
  args: {
    children: "Checkbox",
  },
}

export const Selected: Story = {
  args: {
    ...Default.args,
    isSelected: true,
  },
}

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    isIndeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
}

export const Readonly: Story = {
  args: {
    ...Default.args,
    isReadOnly: true,
  },
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
  },
}
