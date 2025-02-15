import {baseFetch} from "./helpers/baseFetch.js";
import {VITE_WEATHER_API_KEY, VITE_WEATHER_API_URL, UNITS} from "./constants/api.js";

function createWeatherApiService(){
    function getWeatherByCity(city){
        return baseFetch(`${VITE_WEATHER_API_URL}?q=${city}&appid=${VITE_WEATHER_API_KEY}&units=${UNITS}`)
    }

    function getWeatherByLocation(lat, lon) {
        return baseFetch(`${VITE_WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${VITE_WEATHER_API_KEY}&units=${UNITS}`)
    }

    return {getWeatherByCity, getWeatherByLocation}
}

export const weatherApiService = createWeatherApiService()