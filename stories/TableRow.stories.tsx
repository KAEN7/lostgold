import React from "react";

import { Meta, Story } from "@storybook/react";
import TableRow, { ICheckBox } from "../components/molecules/TableRow";

export default {
	title: "molecules/TableRow",
	component: TableRow,
} as Meta;

const Template: Story<ICheckBox> = (args) => <TableRow {...args} />;

export const Basic = Template.bind({});
Basic.args = { children: "", name: "캐릭터명", job: "직업" };
