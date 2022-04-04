import axios from "axios";

const instance = axios.create({
    baseURL: "http://pts6.local/",
});

export default instance;