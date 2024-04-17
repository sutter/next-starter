import type { Meta, StoryObj } from "@storybook/react"
import FormTextarea from "./FormTextarea"

const meta: Meta<typeof FormTextarea> = {
  title: "FormTextarea",
  component: FormTextarea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormTextarea>

export const Default: Story = {
  args: { placeholder: "Placeholder" },
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
