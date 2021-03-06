import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { DefaultSeo } from "next-seo";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	// 여기부터는 문서 공통 정보를 다루는 기존 _document 파일의 역할과 동일합니다.
	render() {
		return (
			<Html>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
