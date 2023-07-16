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
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogposts][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log(err);
	});
	return [response.data];
};


export const getProjectPage = async function () {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/projects-page`,
		{
			params: {
				"populate[content][populate][project][populate]": "cover, tags",
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogposts][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log(err);
	});
	return [response.data];
};


export const getBlogPage = async function () {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/blogs-page`,
		{
			params: {
				"populate[content][populate][blog][populate]": "cover, tags",
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogposts][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log(err);
	});
	return [response.data];
};






export default { getHomePage, getProjectPage, getBlogPage };
