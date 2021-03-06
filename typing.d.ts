// src/typing.d.ts
declare module "*.mdx";
declare module "*.svg" {
	import * as React from "react";
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}

declare module "redux-persist/lib/storage/createWebStorage";
