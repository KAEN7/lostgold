import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toggleAside } from "../store";
import { pageDefault, color, titles } from "../styles/theme";
import ClassList from "./ClassList";

const Aside = () => {
	const [toggle, setToggle] = useRecoilState(toggleAside);

	const setToggleHandler = () => {
		setToggle(false);
	};

	return (
		<AsideSection toggle={toggle}>
			<AsideHeader>
				<div className="profile"></div>

				<div className="buttonBox">
					<Buttons>
						<img src="/image/setting.svg" />
					</Buttons>
					<Buttons onClick={() => setToggleHandler()}>
						<img src="/image/close.svg" />
					</Buttons>
				</div>
			</AsideHeader>

			<AsideBody>
				<span>Weekly Gold Amount</span>

				<ClassList></ClassList>
			</AsideBody>
		</AsideSection>
	);
};

interface IAsideSection {
	toggle: boolean;
}

const AsideSection = styled.aside<IAsideSection>`
	display: ${(props) => (props.toggle ? "flex" : "none")};
	flex-direction: column;
	align-items: flex-start;
	right: 0;
	background: ${color.default};
	flex: 1;
	height: 95vh;
	border-radius: 0rem 2.875rem 3.75rem 0rem;
	padding-right: 1.6875rem;
	box-sizing: border-box;
`;

const AsideHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 2.25rem;
	margin-bottom: 4.25rem;

	.profile {
		width: 4.875rem;
		height: 4.875rem;
		background: #d9d9d9;
		border-radius: 50% 50%;
	}

	.buttonBox {
		width: fit-content;
	}
`;

const AsideBody = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	span {
		${titles}

		font-size: 2.4375rem;
		line-height: 2.9375rem;
		letter-spacing: 0.05em;
		color: ${color.font};
	}
`;

// todo 스토리북으로 뺄거
const Buttons = styled.button`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	background: ${color.default};
	box-shadow: 0.0625rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.25);
	margin-right: 1.25rem;
	cursor: pointer;
`;

export default Aside;
