// 재료 정보

interface IMatarialInfo {
	SettingBox?: any;
	ItemBox?: any;
	matarialList: object[];
	onMatarialHandler?: any;
}

const MatarialInfo: React.FunctionComponent<IMatarialInfo> = ({
	SettingBox,
	ItemBox,
	matarialList,
	onMatarialHandler,
}) => {
	// 재료 input toggle 변경
	const onSubmitMatarial = (e: any, idx: number, boo: boolean) => {
		const temp = matarialList.map((el: any, index: number) =>
			idx === index ? { ...el, toggle: boo } : el
		);
		onMatarialHandler(temp);
		e.preventDefault();
	};

	// 재료 input value 변경
	const onChangeMatarial = (e: any, idx: number) => {
		const temp = matarialList.map((el: any, index: number) =>
			idx === index ? { ...el, toggle: true, value: e.target.value } : el
		);
		onMatarialHandler(temp);
	};

	return (
		<>
			<h3>각 재료들의 판매 가격을 적어주세요</h3>
			<SettingBox defaultStyle={true}>
				{matarialList.map((el: any, idx: number) => (
					<ItemBox
						key={`item${idx}`}
						onSubmit={(e: any) => onSubmitMatarial(e, idx, false)}
					>
						<h4 className="subTitle">{el.name}</h4>
						{el.toggle ? (
							<input
								type="number"
								className="goldInput"
								value={el.value}
								onChange={(e) => onChangeMatarial(e, idx)}
							/>
						) : (
							<span
								className="gold"
								onClick={(e) => onSubmitMatarial(e, idx, true)}
							>
								{el.value}G
							</span>
						)}
					</ItemBox>
				))}
			</SettingBox>
		</>
	);
};

export default MatarialInfo;
