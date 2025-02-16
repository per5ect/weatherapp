import { weatherApiService } from './weatherApiService.js'
import { DEFAULT_CITY } from "./constants/api.js";
import { WeatherWidgetService } from "./weatherWidgetService.js";
import { Settings } from "./constants/settings.js";
import { WeatherDetailsService } from "./weatherDetailsService.js";

const getWeatherByLocationButton = document.getElementById("get-weather-by-location-feature")

function processWeatherByLocation(){
    const onSuccessLocation = (position) => {
        localStorage.setItem(Settings.isLocationFeatureEnabled, true)

        weatherApiService.getWeatherByLocation(position.coords.latitude, position.coords.longitude)
            .then(async data => {
                await WeatherWidgetService().process(data)
                return data
            }).then( data => {
            WeatherDetailsService().detailsProcess(data)
        })
    }

    const onErrorLocation = (error) => {
        localStorage.setItem(Settings.isLocationFeatureEnabled, false)
        alert("Can't get your location. Please give access to your location")
        throw new Error(error)
    }

    navigator.geolocation.getCurrentPosition(onSuccessLocation, onErrorLocation)
}

getWeatherByLocationButton.addEventListener("click", processWeatherByLocation)

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("input[name='search-city-location']");
    const searchButton = document.querySelector(".secondary-container > .weather-details-wrapper > .search-city-weather > button");

    function searchWeather() {
        const city = searchInput.value;
        if (!city) return;

        weatherApiService.getWeatherByCity(city)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    searchButton.addEventListener("click", searchWeather)

    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchWeather();
        }
    });
});

async function app (){
    const isLocationFeatureEnabled = localStorage.getItem(Settings.isLocationFeatureEnabled)

    if(isLocationFeatureEnabled){
        processWeatherByLocation()
    } else {
        const weatherData = await weatherApiService.getWeatherByCity(DEFAULT_CITY)
        console.log(weatherData)

        await WeatherWidgetService().process(weatherData)
    }
}

app()