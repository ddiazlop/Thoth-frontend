import type { Meta, StoryObj } from "@storybook/react";

import { PageWithTitle } from "./PageWithTitle";
import { RectangularPlaceHolder } from "../Placeholders/RectangularPlaceHolder";
import { ContentPlaceHolder } from "../Placeholders/RectangularPlaceHolder.stories";

const meta = {
  title: "Layouts/PageWithTitle",
  component: PageWithTitle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageWithTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GraphCardHeader: Story = {
  args: {
    children: <RectangularPlaceHolder {...ContentPlaceHolder.args} />,
    title: "Expenses",
  },
};
