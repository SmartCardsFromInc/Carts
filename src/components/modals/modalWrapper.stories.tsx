import type { Meta, StoryObj } from "@storybook/react";

import { ModalWrapper } from "@/components/modals/modalWrapper";

const meta = {
  title: "Components/ModalWrapper",
  component: ModalWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalForQuestion: Story = {};
