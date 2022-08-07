import { useRecoilState } from "recoil";
import Loading from "../components/atoms/Loading";
import Navigator from "../components/Navigator";
import { loadingState } from "../store";

const Root = ({ Component, pageProps }: any) => {
	const [loading, setLoading] = useRecoilState(loadingState);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Navigator />
					<Component {...pageProps} />
				</>
			)}
		</>
	);
};

export default Root;
