import axios from "axios";

const cors_api_url = "https://cors-anywhere.herokuapp.com/";
export const getUnivNotice = async URL => {
	try {
		return await axios.get(cors_api_url + URL, {
			Origin: window.location.hostname,
			"Contents-Type": "application/json"
		});
	} catch (error) {
		console.error(error);
	}
};

export const getEduNotice = async URL => {
	try {
		return await axios.get(cors_api_url + URL, {
			Origin: window.location.hostname,
			"Contents-Type": "application/json"
		});
	} catch (error) {
		console.error(error);
	}
};
