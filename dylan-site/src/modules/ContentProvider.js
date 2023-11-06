"use server";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = Axios.defaults.cache ? Axios : setupCache(Axios);

const axiosConfig = axios.create({
	headers: {
		Authorization: `bearer ${process.env.STRAPI_KEY}`,
	},
});

const fetchData = async (url, params) => {
	try {
		const response = await axiosConfig.get(url, params);

		return response.data ? [response.data] : null;
	} catch (error) {
		console.log("error loading data:", error);
		return null;
	}
};

export const getHomePage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/home-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getAboutPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/about-page`;
	const params = {
		params: {
			"populate[resume]": "*",
			"populate[portrait]": "*",
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getProjectPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/projects-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getBlogPage = async () => {
	const url = `${process.env.STRAPI_HOST}/api/blogs-page`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getAllProjects = async () => {
	const url = `${process.env.STRAPI_HOST}/api/projects`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getAllBlogs = async () => {
	const url = `${process.env.STRAPI_HOST}/api/blogs`;
	const params = {
		params: {
			"populate[content][populate][projects][populate]": "cover, tags",
			"populate[content][populate][blogs][populate]": "cover, tags",
		},
	};

	return await fetchData(url, params);
};

export const getProject = async (UID) => {
	const url = `${process.env.STRAPI_HOST}/api/projects`;
	const params = {
		params: {
			"filters[UID][$eq]": UID,
			"populate[tags]": "*",
			"populate[content][populate]": "*",
		},
	};

	return await fetchData(url, params);
};

export const getBlog = async (UID) => {
	const url = `${process.env.STRAPI_HOST}/api/blogs`;
	const params = {
		params: {
			"filters[UID][$eq]": UID,
			"populate[tags]": "*",
			"populate[content][populate]": "*",
		},
	};

	return await fetchData(url, params);
};

export default {
	getHomePage,
	getAboutPage,
	getProjectPage,
	getBlogPage,
	getProject,
	getBlog,
};
