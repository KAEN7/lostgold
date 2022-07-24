import styled from "styled-components";
import { color, description } from "../../styles/theme";

interface IClassItem {
	item: { name: string; level: number; gold: number };
}

const ClassItem = ({ item }: IClassItem) => {
	return (
		<ItemSection>
			<div className="classIcon"></div>
			<div className="classColumn">
				<span className="classText">{item.name}</span>
				<span className="classText">{item.level}</span>
			</div>
			<span className="classText">{item.gold} G</span>
		</ItemSection>
	);
};

const ItemSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin-bottom: 40px;

	.classIcon {
		min-width: 70px;
		min-height: 70px;
		background: #a7c0fd;
		box-shadow: 0px 1.92857px 1.92857px rgba(0, 0, 0, 0.25);
		border-radius: 13.0179px 0px 14.9464px;
	}

	.classColumn {
		display: flex;
		flex-direction: column;
		margin: 0 20px;
	}

	.classText {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 550;
		font-size: 16px;
		line-height: 29px;
		color: ${color.font};
	}
`;
export default ClassItem;
