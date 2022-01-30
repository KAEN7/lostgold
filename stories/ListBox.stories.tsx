import React from "react";

import { Meta, Story } from "@storybook/react";
import ListBox, { IListBox } from "../components/atoms/ListBox";

export default {
	title: "atoms/ListBox",
	component: ListBox,
} as Meta;

const Template: Story<IListBox> = (args) => <ListBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	children: [
		{ name: "오레하 노말", gold: 1100 },
		{ name: "오레하 하드", gold: 1300 },
		{ name: "아르고스", gold: 1600 },
		{ name: "발탄 노말", gold: 1300 },
		{ name: "발탄 하드", gold: 2100 },
		{ name: "비아 노말", gold: 1800 },
		{ name: "비아 하드", gold: 2800 },
		{ name: "쿠크세이튼", gold: 3100 },
		{ name: "아브 노말", gold: 4500 },
		{ name: "아브 하드", gold: 6000 },
	],
};
