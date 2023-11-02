import type { Meta, StoryObj } from "@storybook/react";

import s from "../../app.module.scss";

import { App } from "@/App";
import { ModalComponent } from "@/components/modal/modalComponent";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TextField } from "@/components/ui/text-field/text-field";

const meta = {
  title: "Components/ModalForAddNewPack",
  component: App,
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalForAddNewPack: Story = {
  render: (args) => {
    return (
      <ModalComponent showClose={true} titleForHeader={"Add New Pack"}>
        <TextField />
        <Checkbox />
        <div className={s.modalButtonGroup}>
          <Button variant={"secondary"}>Cancel</Button>
          <Button variant={"primary"}>Add New Pack</Button>
        </div>
      </ModalComponent>
    );
  },
  args: {
    title: "Add New Pack",
    showClose: true,
  },
};
export const ModalForEditPack: Story = {
  render: () => {
    return (
      <ModalComponent showClose={true} titleForHeader={"Edit Pack"}>
        <TextField />
        <Checkbox />
        <div className={s.modalButtonGroup}>
          <Button variant={"secondary"}>Cancel</Button>
          <Button variant={"primary"}>Save Changes</Button>
        </div>
      </ModalComponent>
    );
  },
  args: {
    title: "Add New Pack",
    showClose: true,
  },
};
