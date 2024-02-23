import type { Meta, StoryObj } from "@storybook/react";

import { CardHeader } from "./CardHeader";

const meta = {
  title: "Card/Header",
  component: CardHeader,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GraphCardHeader: Story = {
  args: {
    title: "Monthly Expenses",
  },
};
