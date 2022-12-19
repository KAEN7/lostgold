import { css } from "styled-components";

// 기기 사이즈
export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

// 미디어 스타일
const theme = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

// color
export const color = {
	white: "#ffffff",
	black: "#181a1e",
	gray: "#2c2f36",
	darkGray: "#212225",
	point: "#c24100",
	subPoint: "#1deac6",
};

// font
export const titles = css`
	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 64.96px;
	line-height: 76px;
`;

export const description = css`
	font-family: "Raleway";
	font-style: normal;
	font-size: 27.01px;
	font-weight: 400;
	line-height: 32px;
`;

// flex 디자인
export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexCenterDir = css`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

// 스크롤 숨김
export const overflowY = css`
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const fadeIn = css`
	animation: fade-in 3s;

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

// 스크롤 디자인
export const scrollBar = css`
	padding: 0px 13px 0px 13px;
	overflow-y: scroll;
	box-sizing: border-box;
	margin-right: 50px;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		height: 17%;
		background: #d9d9d9;
		border-radius: 30px;
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0);
	}
`;

export default theme;
