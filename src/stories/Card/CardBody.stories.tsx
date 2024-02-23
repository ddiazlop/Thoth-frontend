import type { Meta, StoryObj } from "@storybook/react";

import { CardBody } from "./CardBody";

const meta = {
  title: "Card/Header",
  component: CardBody,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GraphCardBody: Story = {
  args: {
    children: "This is the body of the card",
  },
};
