// 호버시 나타날 리스트

import styled from "styled-components";
import { flexCenterDir, color } from "../../styles/theme";

const ListSection = styled.ul`
	${flexCenterDir}

	text-align: center;
	position: absolute;
	width: fit-content;
	height: 10rem;
	padding: 8px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	background: #333;
	color: ${color.white};
	font-size: 14px;

	overflow-y: auto;
	.scroll-test::-webkit-scrollbar {
		width: 2px;
	}
	.scroll-test::-webkit-scrollbar-track {
		background-color: transparent;
	}
	.scroll-test::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: gray;
	}
	.scroll-test::-webkit-scrollbar-button {
		width: 0;
		height: 0;
	}
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
	children?: IListItem[] | undefined;
}

const ListBox: React.FC<IListBox> = ({ children }) => {
	return (
		<ListSection>
			{children.map((el) => (
				<ListItem>{el.name}</ListItem>
			))}
		</ListSection>
	);
};

export default ListBox;
