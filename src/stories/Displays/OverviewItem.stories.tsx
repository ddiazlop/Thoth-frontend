import type { Meta, StoryObj } from "@storybook/react";

import { OverviewItem } from "./OverviewItem";

const meta = {
  title: "Displays/OverviewItem",
  component: OverviewItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OverviewItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 1000,
    type: "Some type",
  },
};
