import type { Meta, StoryObj } from "@storybook/react"
import FormInput from "./FormInput"

const meta: Meta<typeof FormInput> = {
  title: "FormInput",
  component: FormInput,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormInput>

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
}

export const Size: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <FormInput {...args} size="xs" />
      <FormInput {...args} size="sm" />
      <FormInput {...args} />
      <FormInput {...args} size="lg" />
    </div>
  ),
}

export const Type: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <FormInput {...args} type="text" />
      <FormInput {...args} type="password" />
      <FormInput {...args} type="email" />
      <FormInput {...args} type="number" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
}
