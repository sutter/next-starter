import type { Meta, StoryObj } from "@storybook/react"
import FormLabel from "./FormLabel"

const meta: Meta<typeof FormLabel> = {
  title: "FormLabel",
  component: FormLabel,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormLabel>

export const Default: Story = {
  args: {
    children: "Label",
  },
}
