import type { Meta, StoryObj } from "@storybook/react"
import FormGroup from "./FormGroup"
import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"

const meta: Meta<typeof FormGroup> = {
  title: "FormGroup",
  component: FormGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormGroup>

export const Default: Story = {
  args: {
    defaultValue: "my value",
    labelProps: {
      children: "Label",
    },
  },
  render: (args) => (
    <div className="grid gap-4">
      <FormGroup {...args} children={<FormInput />} />
      <FormGroup {...args} children={<FormTextarea />} />
    </div>
  ),
}

export const DefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "Default value",
    children: [<FormInput />],
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
