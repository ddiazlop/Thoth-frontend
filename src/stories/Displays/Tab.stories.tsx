import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from "./Tab";

const meta = {
  title: "Displays/Tab",
  component: Tab,
  argTypes: {
    currentView: {
      options: [1, 2, 3],
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setCurrentView: (value: number) => undefined,
    views: [1, 2, 3],
    currentView: 1,
  },
};
