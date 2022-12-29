import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const armories = async (req: NextApiRequest, res: NextApiResponse) => {
	const name: string | any = req.query.data;

	const armoriesList: any = {};

	const apiList = [
		"profiles",
		"equipment",
		"avatars",
		"combat-skills",
		"engravings",
		"cards",
		"gems",
		"colosseums",
		"collectibles",
	];

	await Promise.all(
		apiList.map(
			async (path, idx) =>
				await axios
					.get(
						`${
							process.env.NEXT_PUBLIC_LOSTARK_OPENAPI
						}/armories/characters/${encodeURIComponent(name)}/${path}`,
						{
							headers: {
								accept: "appication/json",
								"Content-Type": "application/json",
								authorization: `bearer ${process.env.NEXT_PUBLIC_LOSTARK_JWT}`,
							},
						}
					)
					.then(
						({ data }) =>
							(armoriesList[path === "combat-skills" ? "combatSkills" : path] =
								data)
					)
					.catch((err) => {
						console.error("Characters ERROR", err);
						res.status(404).json({ err: "Not Found" });
					})
		)
	);

	res.status(200).json({ data: armoriesList });
};

export default armories;
