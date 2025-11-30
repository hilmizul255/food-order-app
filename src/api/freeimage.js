import axios from "axios";

async function uploadToFreeImageHost(file) {
    const formData = new FormData();
    formData.append("key", "6d207e02198a847aa98d0a2a901485a5");
    formData.append("action", "upload");
    formData.append("format", "json");
    formData.append("source", file);

    try {
        const res = await axios.post(
            "https://corsproxy.io/?https://freeimage.host/api/1/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        console.log("Upload result:", res.data);
        return res.data;
    } catch (err) {
        console.error("Upload error:", err.response?.data || err);
        throw err;
    }
}

export default uploadToFreeImageHost;
