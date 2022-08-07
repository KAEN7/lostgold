import type { NextApiRequest, NextApiResponse } from "next";
// import userAgentList from "../../public/json/userAgentList.json";
// import cookie from "../../public/json/cookie.json";

const puppeteer = require("puppeteer");

const userAgentList = [
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32",
	"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
];

interface IProfile {
	server?: string;
	list?: any[];
}

interface ICharacter {
	name?: string;
	level?: string;
	img?: string;
}

const puppeteers = async (name: { data: string }) => {
	const url = "https://lostark.game.onstove.com/Profile/Character";
	const randomNum = Math.floor(Math.random() * userAgentList.length);
	const browser = await puppeteer.launch({
		waitUntil: "networkidle2",
		headless: false,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});
	const data: any = [];
	const page = await browser.newPage();

	await page.setUserAgent(userAgentList[randomNum]);
	await page.setDefaultTimeout(0);
	await page.setBypassCSP(true);
	await page.goto(url, { waitUntil: "networkidle2" });
	// await page.setCookies(cookie);

	try {
		const inputArea = await page.$(
			"#lostark-wrapper > div > main > div > div > div.profile-search > form > fieldset > input"
		);
		const searchBtn = await page.$(
			"#lostark-wrapper > div > main > div > div > div.profile-search > form > fieldset > button"
		);

		await inputArea.type(name.data);
		await searchBtn.click();

		await page.waitForSelector(
			"#lostark-wrapper > div > main > div > div.profile-character-info > button"
		);
		await page.click(
			"#lostark-wrapper > div > main > div > div.profile-character-info > button"
		);

		const expandList = await page.$$eval(
			".profile-character-list__char",
			(el: any) => el.length
		);

		const expandArr = [...Array(expandList).keys()];

		for (let i of expandArr) {
			let profile: IProfile = {}; // 이게 is not defined래 왜지 감자?

			await page.$eval(
				`#expand-character-list > strong:nth-child(${i + 2})`,
				(el: any) => {
					profile.server = el.textContent;
				}
			);

			const listLength = await page.$$eval(
				`#expand-character-list > ul:nth-child(${i + 2}) > li`,
				(el: any) => {
					el.length;
				}
			);

			const listArr = [...Array(listLength).keys()];
			const list = [];

			for (let j = 0; j < listArr.length; j++) {
				const character: ICharacter = {};

				// LEVEL
				await page.$eval(
					`#expand-character-list > ul:nth-child(${i + 2}) > li:nth-child(${
						j + 2
					}) > span > button`,
					(el: any) => {
						character.level = el.textContent.replace("Lv.", "");
					}
				);

				// NAME
				await page.$eval(
					`#expand-character-list > ul:nth-child(${i + 2}) > li:nth-child(${
						j + 2
					}) > span > button > span`,
					(el: any) => {
						character.name = el.textContent;
					}
				);

				// IMG
				await page.$eval(
					`#expand-character-list > ul:nth-child(${i + 2}) > li:nth-child(${
						j + 2
					}) > span > button > img`,
					(el: any) => {
						character.img = el.textContent;
					}
				);

				console.log("character", character);
				list.push(character);
			}
			profile.list = list;

			console.log("profile", profile);
			data.push(profile);
		}
	} catch (err) {
		console.error(url, err);
	}

	// await browser.close();
	console.log("data", data);

	return data;
};

const crawler = async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ data: await puppeteers(req.body) });
};

export default crawler;
