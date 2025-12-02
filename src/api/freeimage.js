import axios from "axios";

const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function freeImage(file) {
    // Client-side validation for supported types
    const supportedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!supportedTypes.includes(file.type)) {
        alert(`Unsupported file type: ${file.type}. Please upload a JPG, PNG, or GIF.`);
        throw new Error("Unsupported file type");
    }

    const base64Image = await toBase64(file);
    // Strip the data:image/...;base64, prefix to send raw base64
    const base64Source = base64Image.split(',')[1];

    const params = new URLSearchParams();
    params.append("key", "6d207e02198a847aa98d0a2a901485a5");
    params.append("action", "upload");
    params.append("format", "json");
    params.append("source", base64Source);

    try {
        const res = await axios.post(
            "https://corsproxy.io/?https://freeimage.host/api/1/upload",
            params
        );

        console.log("Upload result:", res.data);
        return res.data.image.url;
    } catch (err) {
        console.error("Upload error:", err);
        if (err.response) {
            console.error("Error response data:", err.response.data);
        }
        console.error("Upload failed. Please check the console for details.");
        throw err;
    }
}

export default freeImage;
