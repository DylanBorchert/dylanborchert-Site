import axios from "axios";
import { cache } from 'react';

export const getHomePage = async function () {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/home-page`,
		{
			params: {
				"populate[content][populate][projects][populate]": "cover",
				"populate[content][populate][blogposts][populate]": "cover",
			},
		}
	);
	return [response.data];
};




export default { getHomePage };
