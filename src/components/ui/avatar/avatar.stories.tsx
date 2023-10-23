import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../avatar/avatar";

const meta = {
  title: "Components/DropdownMenuDemo",
  component: Avatar,
  tags: ["autodocs"],
  // argTypes: {
  //     variant: {
  //         options: ["primary", "secondary", "tertiary", "link"],
  //         control: { type: "radio" },
  //     },
  // },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarIcon: Story = {
  // args: {
  //     variant: "primary",
  //     children: "Button primary",
  //     disabled: false,
  // },
};
