import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "My Button",
    color: "default",
  },
}

const Pills = () => <span className="h-3 w-3 rounded-full bg-black" />

export const Size: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="flex gap-2 items-center">
      <Button {...args} size="xs">
        Size XS
      </Button>
      <Button {...args} size="sm">
        Size SM
      </Button>
      <Button {...args}>Size MD</Button>
      <Button {...args} size="lg">
        Size LG
      </Button>
    </div>
  ),
}

export const Color: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
    </div>
  ),
}
export const Link: Story = {
  args: {
    ...Default.args,
    href: "/",
  },
}

export const LeftContent: Story = {
  args: {
    ...Default.args,
    leftContent: <Pills />,
  },
}

export const rightContent: Story = {
  args: {
    ...Default.args,
    rightContent: <Pills />,
  },
}

export const IconOnly: Story = {
  args: {
    ...Default.args,
    isIconOnly: true,
    leftContent: <Pills />,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
}
