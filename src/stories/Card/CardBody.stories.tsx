import type { Meta, StoryObj } from "@storybook/react";

import { CardBody } from "./CardBody";
import { RectangularPlaceHolder } from "../Placeholders/RectangularPlaceHolder";
import { ContentPlaceHolder } from "../Placeholders/RectangularPlaceHolder.stories";

const meta = {
  title: "Card/Body",
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
    children: <RectangularPlaceHolder {...ContentPlaceHolder.args} />,
  },
};
