import { atom, selector } from "recoil";

export const tempState = atom({
	key: "tempState",
	default: 0,
});

export const tempSelector = selector({
	key: "tempSelector",
	get: ({ get }) => {
		const temp = get(tempState);
		return temp;
	},
});
