import axios from "axios";

export const getHomePage = async function () {
	console.log(process.env.STRAPI_KEY);
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`https://strapi.phantommedia.online/api/home-page`,
		{
			params: {
				"populate[content][populate]": "*",
			},
		}
	);
	return [response.data];
};




export default { getHomePage };
