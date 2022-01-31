// 호버시 나타날 리스트

import styled from "styled-components";
import { scrollBar, color } from "../../styles/theme";

const ListSection = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
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

	${scrollBar}
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
	// children?: IListItem[];
	children?: any;
	onTitlehandler?: any;
}

const ListBox: React.FC<IListBox> = ({ children, onTitlehandler }) => {
	return (
		<ListSection>
			{children.map((el: any, idx: number) => (
				<ListItem onClick={() => onTitlehandler(el.name)} key={`list${idx}`}>
					{el.name}
				</ListItem>
			))}
		</ListSection>
	);
};

export default ListBox;
