import styled from "styled-components";

const ClassItem = () => {
	return (
		<ClassSection>
			<div className="classIcon"></div>
			<>
				<span></span>
				<span></span>
			</>
			<span></span>
		</ClassSection>
	);
};

const ClassSection = styled.div`
	display: flex;

	.classIcon {
		position: absolute;
		width: 70px;
		height: 70px;
		left: 1662px;
		top: 554px;

		background: #a7c0fd;
		box-shadow: 0px 1.92857px 1.92857px rgba(0, 0, 0, 0.25);
		border-radius: 13.0179px 0px 14.9464px;
	}
`;
export default ClassItem;
