import axios from "axios";

const instance = axios.create({
	// baseURL: "http://localhost:4500", // api url
	//baseURL: "https://determined-tuna-panama-hat.cyclic.app",  // api url
	baseURL: "https://evangadiforum-server-render.onrender.com",

	withCredentials: true,
});

export default instance;
