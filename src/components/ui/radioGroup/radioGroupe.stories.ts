import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroupComponent } from "./radioGroupComp";

const meta = {
  title: "Components/RadioGroupComponent",
  component: RadioGroupComponent,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRadioGroup: Story = {};
