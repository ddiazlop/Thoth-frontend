import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./FormInput";

const meta = {
  title: "Forms/Inputs/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Concept",
    name: "concept",
    placeholder: "Bottle of Water",
  },
};
