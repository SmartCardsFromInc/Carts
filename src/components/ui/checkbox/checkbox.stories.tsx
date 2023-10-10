import { useState } from "react";

import { Meta } from "@storybook/react";

import { VerticalContainer } from "../../containers/vertical";
import { ValuePreview } from "../../previews/value-preview/index";

import { Checkbox } from "./checkbox";

export default {
  title: "Components/Data Entry/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = {
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
