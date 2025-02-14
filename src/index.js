import {weatherApiService} from './weatherApiService.js'
import { imageApiService } from './imageApiService.js'
import {DEFAULT_CITY} from "./constants/api.js";
import {formatTemperature} from "./helpers/formatTemperature.js";


function aplyBackgroundImage(url){
    const appBackgroundElement = document.getElementById("app-background")

    if (!appBackgroundElement){
        throw new Error("Element with id 'app-background' not found")
    }

    appBackgroundElement.style.backgroundImage = `url(${url})`
    appBackgroundElement.style.backgroundSize = "cover"
    appBackgroundElement.style.backgroundPosition = "center"
    appBackgroundElement.style.backgroundRepeat = "no-repeat"
    appBackgroundElement.style.filter = "contrast(0.5)"
}

async function getBackgroundImage(keywords){
    const imgResp = await imageApiService.fetchImageByKeywords(keywords)
    const imgUrl = imgResp.results[0].urls.regular

    return imgUrl
}

function applyTemperature(temperature){
    const temperatureElement = document.querySelector("#weather-widget > .temp > p")

    if (!temperatureElement){
        throw new Error("Element with selector '#weather-widget > .temp > p' not found")
    }

    temperatureElement.textContent = temperature
}


async function app (){
    const imgUrl = await getBackgroundImage(`${DEFAULT_CITY}`)

    aplyBackgroundImage(imgUrl)

    const weatherData = await weatherApiService.getWeatherByCity(DEFAULT_CITY)
    console.log(weatherData)

    applyTemperature(formatTemperature(weatherData.main.temp))
}

app()



const getWeatherByMyLocationButton = document.getElementById("get-weather-by-my-location")


getWeatherByMyLocationButton.addEventListener("click", () => {
    const onSuccessLocation = (position) => {
        weatherApiService.getWeatherByLocation(position.coords.latitude, position.coords.longitude)
            .then(data => {
                console.log(data)
            })
    }

    const onErrorLocation = (error) => {
        console.error(error)
    }

    navigator.geolocation.getCurrentPosition(onSuccessLocation, onErrorLocation)
})




