// 홈 메인화면

import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { flexCenterDir, pageDefault, fadeIn } from "../styles/theme";

const HomeSection = styled.section`
	${pageDefault}
`;

const HomeTitle = styled.div`
	${flexCenterDir}
	${fadeIn}
	
	margin-top: 15rem;
`;

const Index: NextPage = () => {
	return (
		<HomeSection>
			<Header title="home" />
			<HomeTitle>
				<Image
					className="titleImg"
					src="/image/LostGold.png"
					width={400}
					height={140}
				/>
				<h2>내 한달 골드 수입을 한눈에 확인해보세요</h2>
			</HomeTitle>
			<Footer />
		</HomeSection>
	);
};

export default Index;
