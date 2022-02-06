import React from "react";

import { Meta, Story } from "@storybook/react";
import CheckBox, { ICheckBox } from "../components/atoms/CheckBox";

export default {
	title: "atoms/CheckBox",
	component: CheckBox,
} as Meta;

const Template: Story<ICheckBox> = (args) => <CheckBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
