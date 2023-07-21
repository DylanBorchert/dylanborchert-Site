import axios from "axios";
import fs from "fs";


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
		console.log("error loading home page");
	});
	if (response?.data) {
		fs.writeFile('/home-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		const data = fs.readFileSync('/home-page.json', 'utf8');
		return [JSON.parse(data)];
	}
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
	if (response?.data) {
		fs.writeFile('/project-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		const data = fs.readFileSync('/project-page.json', 'utf8');
		return [JSON.parse(data)];
	}
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
	if (response?.data) {
		fs.writeFile('/blog-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		const data = fs.readFileSync('/blog-page.json', 'utf8');
		return [JSON.parse(data)];
	}
};






export default { getHomePage, getProjectPage, getBlogPage };
