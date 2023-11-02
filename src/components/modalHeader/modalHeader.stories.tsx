import type { Meta, StoryObj } from "@storybook/react";

import { ModalHeader } from "@/components/modalHeader/modalHeader";

const meta = {
  title: "Components/ModalHeader",
  component: ModalHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalHeaderComponent: Story = {
  render: () => {
    return <ModalHeader title={"Add New Pack"} showClose={true} />;
  },
  args: {
    title: "Add New Pack",
    showClose: true,
  },
};
export const ModalHeaderComponentWithoutClose: Story = {
  render: () => {
    return <ModalHeader title={"Learn “Pack Name”"} showClose={false} />;
  },
  args: {
    title: "Add New Pack",
    showClose: false,
  },
};
