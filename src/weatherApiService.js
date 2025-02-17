import {baseFetch} from "./helpers/baseFetch.js";
import { VITE_WEATHER_API_KEY, VITE_WEATHER_API_URL, UNITS, VITE_WEATHER_API_FORECAST_URL } from "./constants/api.js";

function createWeatherApiService(){
    function getWeatherByCity(city){
        return baseFetch(`${VITE_WEATHER_API_URL}?q=${city}&appid=${VITE_WEATHER_API_KEY}&units=${UNITS}`)
    }

    function getWeatherByLocation(lat, lon) {
        return baseFetch(`${VITE_WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${VITE_WEATHER_API_KEY}&units=${UNITS}`)
    }

    function getForecastByLocation(lat, lon) {
        return baseFetch(`${VITE_WEATHER_API_FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${VITE_WEATHER_API_KEY}&units=${UNITS}&cnt=8`)
    }

    return {getWeatherByCity, getWeatherByLocation, getForecastByLocation}
}

export const weatherApiService = createWeatherApiService()