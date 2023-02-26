import apiClient from "./ClientApi";

const uploadImage = async (image: any) => {
    return apiClient.post("/file/file", image)
}

export default {uploadImage};