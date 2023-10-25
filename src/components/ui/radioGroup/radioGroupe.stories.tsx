import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroupComponent } from "./radioGroupComp";

const testingData = [
  {
    value: "value1",
    label: "label1",
  },
  {
    value: "value2",
    label: "label2",
  },
  {
    value: "value3",
    label: "label3",
  },
];
const meta = {
  title: "Components/RadioGroupComponent",
  component: RadioGroupComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRadioGroup: Story = {
  render: () => {
    return <RadioGroupComponent items={testingData} />;
  },
  args: {
    items: testingData,
  },
};
