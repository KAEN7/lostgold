import axios from "axios";

const search = async (e: any, name: string, setLoading: any) => {
	await setLoading(true);

	e.preventDefault();

	await axios
		.post("/api/crawler", { data: name })
		.then((data) => console.log("data", data));

	await setLoading(false);
};

export default search;
