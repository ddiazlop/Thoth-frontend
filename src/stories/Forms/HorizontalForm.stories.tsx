import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalForm } from "./HorizontalForm";
import { RectangularPlaceHolder } from "../Placeholders/RectangularPlaceHolder";
import { fn } from "@storybook/test";
import { FormInput } from "./FormInput";
import { Default as FormInputDefault } from "./FormInput.stories";
import { Default as FormCheckboxContainerDefault } from "./FormCheckboxContainer.stories";
import { FormCheckboxContainer } from "./FormCheckboxContainer";

const meta = {
  title: "Forms/HorizontalForm",
  component: HorizontalForm,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HorizontalForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <RectangularPlaceHolder width="20" height="5" />,
  },
};

export const DefaultWithCheckboxSection: Story = {
  args: {
    children: [
      <RectangularPlaceHolder width="20" height="5" label="Inputs" />,
      <RectangularPlaceHolder width="8" height="5" label="Checkboxes" />,
    ],
  },
};

export const TwoInputs: Story = {
  args: {
    children: [
      <FormInput {...FormInputDefault.args} />,
      <FormInput {...FormInputDefault.args} />,
    ],
  },
};

export const TwoInputsAndTwoCheckBoxes: Story = {
  args: {
    children: [
      <FormInput {...FormInputDefault.args} />,
      <FormInput
        label="Amount"
        name="amount"
        step="0.01"
        type="number"
        placeholder="1.80"
      />,
      <FormCheckboxContainer
        {...FormCheckboxContainerDefault.args}></FormCheckboxContainer>,
    ],
  },
};
