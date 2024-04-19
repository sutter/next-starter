import type { Meta, StoryObj } from "@storybook/react"
import FormCheckboxGroup from "./FormCheckboxGroup"
import FormCheckbox from "./FormCheckbox"

const meta: Meta<typeof FormCheckboxGroup> = {
  title: "FormCheckboxGroup",
  component: FormCheckboxGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormCheckboxGroup>

export const Default: Story = {
  args: {
    labelProps: {
      children: "Label",
    },
    children: (
      <>
        <FormCheckbox value="checkbox-1">Checkbox 1</FormCheckbox>
        <FormCheckbox value="checkbox-2">Checkbox 2</FormCheckbox>
        <FormCheckbox value="checkbox-3">Checkbox 3</FormCheckbox>
      </>
    ),
  },
}

export const DefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: ["checkbox-1"],
  },
}

export const Description: Story = {
  args: {
    ...DefaultValue.args,
    description: "This is a description",
  },
}

export const isInvalid: Story = {
  args: {
    ...DefaultValue.args,
    isInvalid: true,
    errorMessages: "This is an error message",
  },
}

export const Disabled: Story = {
  args: {
    ...DefaultValue.args,
    isDisabled: true,
  },
}

export const Readonly: Story = {
  args: {
    ...DefaultValue.args,
    isReadOnly: true,
  },
}
