import styled from "styled-components";
import { scrollBar } from "../styles/theme";
import ClassItem from "./atoms/ClassItem";

const ClassList = () => {
	// ! temp value
	const classList = [
		{ name: "카엔입니다", level: 1475, gold: 1000, class: "" },
	];

	return (
		<ClassSection>
			{classList.map((item) => (
				<ClassItem key={item.name} item={item} />
			))}
		</ClassSection>
	);
};

const ClassSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 60%;
	${scrollBar}
	overflow-x: hidden;
	padding: 0;
`;
export default ClassList;
