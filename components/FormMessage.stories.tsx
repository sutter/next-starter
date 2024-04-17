import type { Meta, StoryObj } from "@storybook/react"
import FormMessage from "./FormMessage"

const meta: Meta<typeof FormMessage> = {
  title: "FormMessage",
  component: FormMessage,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormMessage>

export const Default: Story = {
  args: {
    children: "This is a message",
  },
}

export const Error: Story = {
  args: {
    ...Default.args,
    color: "error",
  },
}

export const Success: Story = {
  args: {
    ...Default.args,
    color: "success",
  },
}
