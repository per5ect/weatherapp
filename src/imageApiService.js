import { baseFetch } from "./helpers/baseFetch.js";


function createImageApiService(){
    const IMAGE_API_URL = import.meta.env.VITE_IMAGE_API_URL;
    const IMAGE_ACCESS_KEY = import.meta.env.VITE_IMAGE_API_ACCESS_KEY;

    const options = {
        headers: {
            "Accept-Version": "v1",
            "Authorization": `Client-ID ${IMAGE_ACCESS_KEY}`
        }
    }

    function fetchImageByKeywords(keywords){
        return baseFetch(`${IMAGE_API_URL}?query=${keywords}&client_id=${IMAGE_ACCESS_KEY}`, options)
    }

    return{
        fetchImageByKeywords
    }
}

export const imageApiService = createImageApiService();