import { weatherConditionsToIconMapper } from "./helpers/mappers.js";
import {formatTemperature} from "./helpers/formatChanger";

export const WeatherForecastService = () => ({
    processForecast(data) {
        const forecastList = document.querySelector(".weather-details-forecast-list ul")

        if (!forecastList) return

        forecastList.innerHTML = ""

        data.list.forEach(forecast => {

            const icon = weatherConditionsToIconMapper(forecast.weather[0].icon)
            const time = forecast.dt_txt.split(" ")[1].slice(0, 5)
            const description = forecast.weather[0].main
            const temperature = formatTemperature(forecast.main.temp)

            const listItem = document.createElement("li")
             listItem.innerHTML = `
                <div class="forecast-icon-time-description"> 
                    <i class="${icon}"></i>
                    <div class="forecast-time-description">
                        <p class="">${time}</p>
                        <p class="forecast-description">${description}</p>
                    </div>
                </div>
                <p class="forecast-temperature">${temperature}</p>
            `

            return  forecastList.appendChild(listItem)
        })
    }
})
