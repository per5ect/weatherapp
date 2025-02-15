export function weatherConditionsToIconMapper(code){
    switch (code) {
        case "01d":
            return "bi bi-sun"; // clear sky day
        case "02d":
            return "bi bi-cloud-sun"; // few clouds day
        case "03d":
        case "03n":
            return "bi bi-cloudy"; // scattered clouds
        case "04d":
        case "04n":
            return "bi bi-clouds"; // broken clouds
        case "09d":
        case "09n":
            return "bi bi-cloud-rain-heavy"; // shower rain
        case "10d":
        case "10n":
            return "bi bi-cloud-drizzle"; // rain
        case "11d":
        case "11n":
            return "bi bi-cloud-lightning-rain"; // thunderstorm
        case "13d":
        case "13n":
            return "bi bi-cloud-snow";  // snow
        case "50d":
        case "50n":
            return "bi bi-cloud-fog"; // fog
        case "01n":
            return "bi bi-moon-stars"; // clear sky night
        case "02n":
            return "bi bi-cloud-moon"; // few clouds night
    }
}