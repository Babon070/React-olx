import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    Headers: {
        "Content-Type": "application/json"
    }
})


export default instance