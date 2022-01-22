// 호버시 나타날 리스트

import styled from "styled-components";
import { flexCenterDir, color } from "../../styles/theme";

const ListSection = styled.ul`
	${flexCenterDir}

	text-align: center;
	position: absolute;
	width: fit-content;
	padding: 8px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	background: #333;
	color: #fff;
	font-size: 14px;
`;

const ListItem = styled.li`
	list-style-type: none;
	width: 100%;
	margin-bottom: 5px;
`;

interface IListItem {
	name?: string;
	gold?: number;
}

export interface IListBox {
	list?: IListItem[] | undefined;
}

const ListBox: React.FC<IListBox> = ({ list }) => {
	return (
		<ListSection>
			{list.map((el) => (
				<ListItem>{el.name}</ListItem>
			))}
		</ListSection>
	);
};

export default ListBox;
