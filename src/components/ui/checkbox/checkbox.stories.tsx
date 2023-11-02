import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { VerticalContainer } from "../../containers/vertical";
import { ValuePreview } from "../../previews/value-preview/index";

import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const CheckBoxComponent = {
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onChange={setChecked} />
        <ValuePreview>checked: {String(checked)}</ValuePreview>
      </VerticalContainer>
    );
  },

  args: {
    label: "Click here",
    disabled: false,
  },
};
