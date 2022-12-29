import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// normal
const { persistAtom } = recoilPersist();

// sessionStorage
// const sessionStorage =
// 	typeof window !== "undefined" ? window.sessionStorage : undefined;

// const { persistAtom } = recoilPersist({
// 	key: "내맘대로 정하는 키 이름",
// 	storage: sessionStorage,
// });

export const toggleAside = atom({
	key: "toggleAside",
	default: true,
	effects_UNSTABLE: [persistAtom],
});

export const toggleAsideSelector = selector({
	key: "toggleAsideSelector",
	get: ({ get }) => {
		const temp = get(toggleAside);
		return temp;
	},
});

export const nameState = atom({
	key: "nameState",
	default: "",
	effects_UNSTABLE: [persistAtom],
});

export const searchCharacterList = atom({
	key: "searchCharacterList",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const armoriesState = atom({
	key: "armoriesState",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const loadingState = atom({
	key: "loadingState",
	default: false,
	effects_UNSTABLE: [persistAtom],
});
