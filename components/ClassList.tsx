import styled from "styled-components";
import ClassItem from "./atoms/ClassItem";

const ClassList = () => {
	const classList = [{}];

	return (
		<ClassSection>
			{classList.map((item) => (
				<ClassItem />
			))}
		</ClassSection>
	);
};

const ClassSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
export default ClassList;