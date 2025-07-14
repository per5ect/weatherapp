import { formatTemperatureMax, formatTemperatureMin, formatChanger } from "./helpers/formatChanger.js"

export function WeatherDetailsService(){

    function applyWeatherDescription(description){
        const descriptionElement = document.querySelector(".weather-details-title > .weather-details-description > p")

        if(!descriptionElement){
            throw new Error("Element with selector '.weather-details-title > .weather-details-description > p' not found")
        }

        descriptionElement.textContent = description.toUpperCase()
    }

    function applyMaxTemperature(maxTemperature){
        const maxTemperatureElement = document.querySelector(".weather-details-content > .weather-details-list > li > .weather-details-data > .temp-max")

        if(!maxTemperatureElement){
            throw new Error("Element with selector '.weather-details-temperature > .max-temperature > p' not found")
        }

        maxTemperatureElement.textContent = maxTemperature
    }

    function applyMinTemperature(minTemperature){
        const minTemperatureElement = document.querySelector(".weather-details-content > .weather-details-list > li > .weather-details-data > .temp-min")

        if(!minTemperatureElement){
            throw new Error("Element with selector '.weather-details-temperature > .min-temperature > p' not found")
        }

        minTemperatureElement.textContent = minTemperature
    }

    function applyHumidity(humidity){
        const humidityElement = document.querySelector(".weather-details-content > .weather-details-list > li > .weather-details-data > .humidity")

        if(!humidityElement){
            throw new Error("Element with selector '.weather-details-temperature > .humidity > p' not found")
        }

        humidityElement.textContent = humidity
    }

    function applyCloudiness(cloudiness){
        const cloudinessElement = document.querySelector(".weather-details-content > .weather-details-list > li > .weather-details-data > .cloudiness")

        if(!cloudinessElement){
            throw new Error("Element with selector '.weather-details-temperature > .cloudiness > p' not found")
        }

        cloudinessElement.textContent = cloudiness
    }

    function apllyWindSpeed(windSpeed){
        const windSpeedElement = document.querySelector(".weather-details-content > .weather-details-list > li > .weather-details-data > .wind-speed")

        if(!windSpeedElement){
            throw new Error("Element with selector '.weather-details-temperature > .wind-speed > p' not found")
        }

        windSpeedElement.textContent = windSpeed
    }

    async function detailsProcess(weatherData){

        applyWeatherDescription(weatherData.weather[0].description)
        applyMaxTemperature(formatTemperatureMax(weatherData.main.temp_max))
        applyMinTemperature(formatTemperatureMin(weatherData.main.temp_min))
        applyHumidity(`${weatherData.main.humidity}%`)
        applyCloudiness(`${weatherData.clouds.all}%`)
        apllyWindSpeed(`${formatChanger(weatherData.wind.speed) } km/h`)
    }


    return{
        detailsProcess
    }
}