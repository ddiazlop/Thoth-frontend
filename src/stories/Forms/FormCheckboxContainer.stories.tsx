import type { Meta, StoryObj } from "@storybook/react";

import { FormCheckboxContainer } from "./FormCheckboxContainer";
import { FormCheckbox } from "./FormCheckbox";
import { Default as FormCheckboxDefault } from "./FormCheckbox.stories";

const meta = {
  title: "Forms/Containers/FormCheckboxContainer",
  component: FormCheckboxContainer,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormCheckboxContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <FormCheckbox {...FormCheckboxDefault.args}></FormCheckbox>,
      <FormCheckbox {...FormCheckboxDefault.args}></FormCheckbox>,
    ],
  },
};
