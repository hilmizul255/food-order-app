import axios from "axios";

const itemsData = axios.create({
    baseURL: "http://localhost:3006/itemsData",
    headers: {
        "Content-Type": "application/json",
    },
});

export default itemsData;
