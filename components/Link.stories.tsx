import type { Meta, StoryObj } from "@storybook/react"
import Link from "./Link"

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: "/",
    children: "My Link",
    color: undefined,
    size: undefined,
  },
}

export const Color: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="flex gap-4">
      <Link {...args}>Base</Link>
      <Link {...args} color="primary">
        Primary
      </Link>
    </div>
  ),
}

export const Size: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Link {...args} size="xs">
        Size XS
      </Link>
      <Link {...args} size="sm">
        Size SM
      </Link>
      <Link {...args}>Size MD</Link>
      <Link {...args} size="lg">
        Size LG
      </Link>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
}
