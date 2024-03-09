import type { Meta, StoryObj } from "@storybook/react";

import { FlexContainer } from "./FlexContainer";
import { RectangularPlaceHolder } from "../Placeholders/RectangularPlaceHolder";
import { ContentPlaceHolder } from "../Placeholders/RectangularPlaceHolder.stories";

const meta = {
  title: "Containers/FlexContainer",
  component: FlexContainer,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FlexContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ColumnFlexContainer: Story = {
  args: {
    children: [
      <RectangularPlaceHolder {...ContentPlaceHolder.args} />,
      <RectangularPlaceHolder {...ContentPlaceHolder.args} />,
    ],
  },
};
