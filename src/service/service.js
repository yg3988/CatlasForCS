import { async } from "q";

const axios = require("axios");
const log = console.log;

const url = "http://203.255.3.223:8000/notices";

export const getMainNoticesList = async () => {
	try {
		return await axios.get(url + "/main", {
			Origin: window.location.hostname
		});
	} catch (error) {
		console.error(error);
	}
};

export const getSubNoticesList = async () => {
	try {
		return await axios.get(url + "/sub", {
			Origin: window.location.hostname
		});
	} catch (error) {
		console.error(error);
	}
};
