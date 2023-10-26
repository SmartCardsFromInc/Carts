import type { Meta, StoryObj } from "@storybook/react";

import { ModalComponent } from "@/components/modals/modalComponent";

const meta = {
  title: "Components/ModalComponent",
  component: ModalComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalForQuestion: Story = {};
