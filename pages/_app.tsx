import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";

const BodySection = styled.body`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100vw;
	height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<BodySection>
			<Header />
			<Component {...pageProps} />
		</BodySection>
	);
}

export default MyApp;
