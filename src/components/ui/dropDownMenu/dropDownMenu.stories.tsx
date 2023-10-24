import type { Meta, StoryObj } from "@storybook/react";

import singOut from "../../../svgs/log-out-for-button.svg";

import { DropdownMenuDemo } from "./dropDownMenu";
import person from "./person-outline.svg";

import deleteSvg from "@/components/ui/dropDownMenu/delete.svg";
import edit from "@/components/ui/dropDownMenu/edit.svg";
import playSvg from "@/components/ui/dropDownMenu/play-circle-outline.svg";

const settingDataMenu = [
  { value: "Learn", src: playSvg, alt: "playSvg" },
  { value: "Edit", src: edit, alt: "editSvg" },
  { value: "Delete", src: deleteSvg, alt: "deleteSvg" },
];
const profileDataMenu = [
  { value: "My Profile", src: person, alt: "My Profile" },
  { value: "Sign Out", src: singOut, alt: "Sign Out" },
];
const personData = {
  name: "Ivan",
  email: "j&johnson@gmail.com",
};

const meta = {
  title: "Components/DropdownMenuDemo",
  component: DropdownMenuDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingDropdownMenu: Story = {
  render: () => {
    return <DropdownMenuDemo items={settingDataMenu} />;
  },
  args: {
    items: settingDataMenu,
  },
};
export const ProfileDropdownMenu: Story = {
  render: () => {
    return <DropdownMenuDemo personData={personData} items={profileDataMenu} />;
  },
  args: {
    items: profileDataMenu,
    personData,
  },
};
