import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/Link";

function MyApp({ Component, pageProps }: AppProps) {
	return;
	<>
		<Component {...pageProps} />
		<>
			<Link href="/gold">
				<a>Gold</a>
			</Link>
		</>
	</>;
}

export default MyApp;
