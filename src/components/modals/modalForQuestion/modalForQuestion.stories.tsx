import type { Meta, StoryObj } from "@storybook/react";

import { ModalForQuestion } from "./modalForQuestion";

const meta = {
  title: "Components/Modal",
  component: ModalForQuestion,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalForQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal1: Story = {};
