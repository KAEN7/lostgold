import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loadingState } from "../../store";
import { flexCenter, color } from "../../styles/theme";

const Loading = () => {
	const [loading, setLoading] = useRecoilState(loadingState);

	return <LoadingSpinner />;
};

const LoadingSection = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	z-index: 9999;
`;

const LoadingSpinner = styled.div`
	${flexCenter}

	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 64px;
	height: 64px;
	margin-top: -32px;
	margin-left: -32px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: ${color.white};
	border-bottom-color: ${color.point};
	animation: loading 0.8s ease infinite;

	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export default Loading;
