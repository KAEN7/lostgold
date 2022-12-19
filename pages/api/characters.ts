import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const characters = async (req: NextApiRequest, res: NextApiResponse) => {
	const name: string | any = req.query.data;

	await axios
		.get(
			`${
				process.env.NEXT_PUBLIC_LOSTARK_OPENAPI
			}/characters/${encodeURIComponent(name)}/siblings`,
			{
				headers: {
					accept: "appication/json",
					"Content-Type": "application/json",
					authorization: `bearer ${process.env.NEXT_PUBLIC_LOSTARK_JWT}`,
				},
			}
		)
		.then(({ data }) =>
			res.status(200).json({
				data,
			})
		)
		.catch((err) => {
			console.error("Characters ERROR", err);
			res.status(404).json({ err: "Not Found" });
		});
};

export default characters;
