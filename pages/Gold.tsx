import styled from "styled-components";
import { pageDefault, color } from "../styles/theme";

const Gold = () => {
	return <GoldSection></GoldSection>;
};

const GoldSection = styled.aside`
	flex: 1;
	background: ${color.default};
`;

export default Gold;
