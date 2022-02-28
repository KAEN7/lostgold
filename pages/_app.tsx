import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { wrapper } from "../redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { persistedReducer } from "../redux";
import { DefaultSeo } from "next-seo";
import { Provider, useStore } from "react-redux";

const AppSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100vw;
	height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
	const store: any = createStore(persistedReducer);
	const persistor = persistStore(store);

	return (
		<PersistGate persistor={persistor} loading={<>loading...</>}>
			<AppSection>
				<Head>
					<title>Lost Gold |</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<DefaultSeo
					title="Lost Gold"
					description="당신의 한달 골드량을 한눈에 확인시켜드립니다"
					canonical="https://lostgold.vercel.app/"
					openGraph={{
						type: "website",
						url: "https://lostgold.vercel.app/",
						title: "간편한 골드 계산기, Lost Gold",
						description: "당신의 한달 골드량을 한눈에 확인시켜드립니다",
						images: [{ url: "https://lostgold.vercel.app/images/seo_bg.png" }],
						site_name: "Lost Gold",
					}}
				/>
				<Component {...pageProps} />
			</AppSection>
		</PersistGate>
	);
}

export default wrapper.withRedux(MyApp);
