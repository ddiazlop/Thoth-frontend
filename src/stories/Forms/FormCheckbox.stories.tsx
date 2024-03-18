import type { Meta, StoryObj } from "@storybook/react";
import { FormCheckbox } from "./FormCheckbox";

const meta = {
  title: "Forms/Inputs/FormCheckbox",
  component: FormCheckbox,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "income",
    label: "Income",
  },
};
