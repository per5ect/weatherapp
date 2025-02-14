import {baseFetch} from "./helpers/baseFetch.js";

function createImageApiService(){
    const ACCESS_KEY = "JZ0LxD66eiIBVbcL1P0PUQiLqZrmXyuAltPe8z8OKDg"

    const options = {
        headers: {
            "Accept-Version": "v1",
            "Authorization": `Client-ID ${ACCESS_KEY}`
        }
    }

    function fetchImageByKeywords(keywords){
        return baseFetch(`https://api.unsplash.com/search/photos?query=${keywords}&client_id=${ACCESS_KEY}`, options)
    }

    return{
        fetchImageByKeywords
    }
}

export const imageApiService = createImageApiService();