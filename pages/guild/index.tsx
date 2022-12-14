import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loadingState } from "../../store";
import { color, flexCenterDir } from "../../styles/theme";

const Index: NextPage = () => {
	const [loading, setLoading] = useRecoilState(loadingState);

	return <GuildSection></GuildSection>;
};

const GuildSection = styled.section`
	${flexCenterDir}

	width: 100%;
	height: 100%;
`;

export default Index;
