import type { Meta, StoryObj } from "@storybook/react";
import FormTextarea from "./FormTextarea";

const meta: Meta<typeof FormTextarea> = {
  title: "FormTextarea",
  component: FormTextarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
  args: { placeholder: "Placeholder" },
};

export const Size: Story = {
  args: {
    ...Default.args,
  },
  render: args => (
    <div className="flex flex-col gap-4">
      <FormTextarea {...args} size="xs" />
      <FormTextarea {...args} size="sm" />
      <FormTextarea {...args} />
      <FormTextarea {...args} size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};
