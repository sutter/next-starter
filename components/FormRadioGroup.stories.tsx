import type { Meta, StoryObj } from "@storybook/react";
import FormRadioGroup from "./FormRadioGroup";
import FormRadio from "./FormRadio";

const meta: Meta<typeof FormRadioGroup> = {
  title: "FormRadioGroup",
  component: FormRadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormRadioGroup>;

export const Default: Story = {
  args: {
    label: "Label",
    defaultValue: "value 1",
    description: "Description",
    children: (
      <>
        <FormRadio value={"value 1"}>Radio 1</FormRadio>
        <FormRadio value={"value 2"}>Radio 2</FormRadio>
        <FormRadio value={"value 3"}>Radio 3</FormRadio>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Readonly: Story = {
  args: {
    ...Default.args,
    isReadOnly: true,
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    errorMessages: "Error message",
  },
};
