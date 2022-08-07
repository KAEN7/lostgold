import { atom, selector } from "recoil";

export const toggleAside = atom({
	key: "toggleAside",
	default: true,
});

export const toggleAsideSelector = selector({
	key: "toggleAsideSelector",
	get: ({ get }) => {
		const temp = get(toggleAside);
		return temp;
	},
});

export const searchMainClass = atom({
	key: "searchMainClass",
	default: "",
});

export const loadingState = atom({
	key: "loadingState",
	default: false,
});
