import type { Meta, StoryObj } from "@storybook/react";

import { OverviewDisplay } from "./OverviewDisplay";
import { OverviewItem } from "./OverviewItem";

const meta = {
  title: "Displays/Overview/OverviewDisplay",
  component: OverviewDisplay,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OverviewDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeValues: Story = {
  args: {
    children: [
      <OverviewItem amount={1000} type="Amazing Type" />,
      <OverviewItem amount={2000} type="Incredible Type" />,
      <OverviewItem amount={3000} type="Regular Type" />,
    ],
  },
};

export const Loading: Story = {
  args: {
    children: [
      <h1 className="md:text-5xl sm:text-3xl text-2xl text-gray-900 font-semibold dark:text-white">
        Loading...
      </h1>,
    ],
  },
};
