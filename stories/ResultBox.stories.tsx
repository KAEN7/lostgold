import React from "react";

import { Meta, Story } from "@storybook/react";
import ResultBox, { IResultBox } from "../components/molecules/ResultBox";

export default {
	title: "molecules/ResultBox",
	component: ResultBox,
} as Meta;

const Template: Story<IResultBox> = (args) => <ResultBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	children: [{ name: "닉네임", result: 14000 }],
};
