import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    Headers: {
        "Content-Type": "application/json"
    }
})


export default instance