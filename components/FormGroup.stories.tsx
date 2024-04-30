import type { Meta, StoryObj } from "@storybook/react";
import FormGroup from "./FormGroup";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const meta: Meta<typeof FormGroup> = {
  title: "FormGroup",
  component: FormGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  args: {
    defaultValue: "my value",
    label: "Label",
  },
  render: args => (
    <div className="grid gap-4">
      <FormGroup {...args}>
        <FormInput />
      </FormGroup>
      <FormGroup {...args}>
        <FormTextarea />
      </FormGroup>
    </div>
  ),
};

export const DefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "Default value",
    children: [<FormInput key="0" />],
  },
};

export const Description: Story = {
  args: {
    ...DefaultValue.args,
    description: "This is a description",
  },
};

export const IsInvalid: Story = {
  args: {
    ...DefaultValue.args,
    isInvalid: true,
    errorMessages: "This is an error message",
  },
};

export const Disabled: Story = {
  args: {
    ...DefaultValue.args,
    isDisabled: true,
  },
};

export const Readonly: Story = {
  args: {
    ...DefaultValue.args,
    isReadOnly: true,
  },
};
