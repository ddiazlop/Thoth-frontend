import type { Meta, StoryObj } from "@storybook/react";

import { RectangularPlaceHolder } from "./RectangularPlaceHolder";

const meta = {
  title: "Placeholders/RectangularPlaceHolder",
  component: RectangularPlaceHolder,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RectangularPlaceHolder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContentPlaceHolder: Story = {
  args: {
    width: "25",
    height: "10",
  },
};
