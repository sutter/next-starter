import type { Meta, StoryObj } from "@storybook/react"
import FormTextField from "./FormTextField"

const meta: Meta<typeof FormTextField> = {
  title: "FormTextField",
  component: FormTextField,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormTextField>

export const Default: Story = {
  args: {
    defaultValue: "my value",
    labelProps: {
      children: "Label",
    },
    inputProps: {
      placeholder: "Placeholder",
    },
  },
}

export const DefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "Default value",
  },
}

export const Description: Story = {
  args: {
    ...Default.args,
    description: "This is a description",
  },
}

export const isInvalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    errorMessages: "This is an error message",
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
    ...DefaultValue.args,
    isReadOnly: true,
  },
}
