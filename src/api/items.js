import axios from "axios";

const itemsApi = axios.create({
    baseURL: "http://localhost:3006",
});

export default itemsApi;