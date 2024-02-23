import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { GraphCardHeader } from "./CardHeader.stories";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { GraphCardBody } from "./CardBody.stories";

const meta = {
  title: "Card/Card",
  component: Card,
  argTypes: {
    width: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const GraphCard: Story = {
  args: {
    width: 100,
    children: [
      <CardHeader {...GraphCardHeader.args} />,
      <CardBody {...GraphCardBody.args} />,
    ],
  },
};

export const HalfWidthGraphCard: Story = {
  args: {
    width: 50,
    children: [
      <CardHeader {...GraphCardHeader.args} />,
      <CardBody {...GraphCardBody.args} />,
    ],
  },
};
