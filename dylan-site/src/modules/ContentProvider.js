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
				"populate[content][populate][blogs][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log("error loading home page");
	});
	if (response?.data) {
		fs.writeFile('/home-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading home page");
		const data = fs.readFileSync('/home-page.json', 'utf8');
		return [JSON.parse(data)];
	}
};

export const getAboutPage = async function () {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/about-page`,
		{
			params: {
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogs][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log("error loading about page");
	});
	if (response?.data) {
		fs.writeFile('/about-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading about page");
		const data = fs.readFileSync('/about-page.json', 'utf8');
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
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogs][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log("error loading project page");
	});
	if (response?.data) {
		fs.writeFile('/project-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading project page");
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
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogs][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log("error loading blog page");
	});
	if (response?.data) {
		fs.writeFile('/blog-page.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading blog page");
		const data = fs.readFileSync('/blog-page.json', 'utf8');
		return [JSON.parse(data)];
	}
};

export const getAllProjects = async function () {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;
	
	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/projects`,
		{
			params: {
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogs][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log("error loading projects");
	});
	if (response?.data) {
		fs.writeFile('/projects.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading projects");
		const data = fs.readFileSync('/projects.json', 'utf8');
		return [JSON.parse(data)];
	}
};

export const getAllBlogs = async function () {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/blogs`,
		{
			params: {
				"populate[content][populate][projects][populate]": "cover, tags",
				"populate[content][populate][blogs][populate]": "cover, tags",
			},
		}
	).catch((err) => {
		console.log("error loading blogs");
	});
	if (response?.data) {
		fs.writeFile('/blogs.json', JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading blogs");
		const data = fs.readFileSync('/blogs.json', 'utf8');
		return [JSON.parse(data)];
	}
};




export const getProject = async function (UID) {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/projects`,
		{
			params: {
				"filters[UID][$eq]": UID,
				"populate[content][populate][projects][populate]": "cover, tags"
			},
		}
	).catch((err) => {
		console.log("error loading project");
	});
	if (response?.data) {
		fs.writeFile(`/projects-${UID}.json`, JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading project");
		const data = fs.readFileSync(`/projects-${UID}.json`, 'utf8');
		return [JSON.parse(data)];
	}
};

export const getBlog = async function (UID) {
	axios.defaults.headers.common[
		"Authorization"
	] = `bearer ${process.env.STRAPI_KEY}`;

	const response = await axios.get(
		`${process.env.STRAPI_HOST}/api/blogs`,
		{
			params: {
				"filters[UID][$eq]": UID,
				"populate[content][populate][blogs][populate]": "cover, tags"
			},
		}
	).catch((err) => {
		console.log("error loading blog");
	});
	if (response?.data) {
		fs.writeFile(`/blogs-${UID}.json`, JSON.stringify(response.data), (err) => { if (err) console.log(err) });
		return [response.data];
	} else {
		console.log("error loading blog");
		const data = fs.readFileSync(`/blogs-${UID}.json`, 'utf8');
		return [JSON.parse(data)];
	}
};

export default { getHomePage, getProjectPage, getBlogPage, getProject, getBlog };
