import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toggleAside } from "../store";
import { pageDefault, color } from "../styles/theme";

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
		</AsideSection>
	);
};

interface IAsideSection {
	toggle: boolean;
}

const AsideSection = styled.aside<IAsideSection>`
	display: ${(props) => (props.toggle ? "flex" : "none")};
	flex-direction: column;
	position: absolute;
	right: 0;
	background: ${color.default};
	height: 95vh;
	width: 523px;
	border-radius: 0px 46px 60px 0px;
	padding-left: 43px;
	margin-right: 3rem;
	box-sizing: border-box;
`;

const AsideHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 36px;

	.profile {
		width: 78px;
		height: 78px;
		background: #d9d9d9;
		border-radius: 50%50%;
	}

	.buttonBox {
		width: fit-content;
	}
`;

// todo 스토리북으로 뺄거
const Buttons = styled.button`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: ${color.default};
	box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
	margin-right: 20px;
`;

export default Aside;
