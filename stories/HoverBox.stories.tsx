import React from "react";

import { Meta, Story } from "@storybook/react";
import HoverBox, { IHoverBox } from "../components/atoms/HoverBox";

export default {
	title: "atoms/HoverBox",
	component: HoverBox,
} as Meta;

const Template: Story<IHoverBox> = (args) => <HoverBox {...args} />;

export const Basic = Template.bind({});
Basic.args = { job: "창술사" };
