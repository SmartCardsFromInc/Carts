import type { Meta, StoryObj } from "@storybook/react";

import { HeaderForModal } from "./headerForModal";

const meta = {
  title: "Components/HeaderForModal",
  component: HeaderForModal,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderForModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderForModalDemo: Story = {
  render: () => {
    return <HeaderForModal title={"Add New Pack"} />;
  },
  args: {
    title: "Add New Pack",
  },
};
