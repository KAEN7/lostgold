import axios from "axios";

const search = async (e: any, name: string) => {
	e.preventDefault();

	await axios
		.post("/api/crawler", { data: name })
		.then((data) => console.log("data", data));
};

export default search;
