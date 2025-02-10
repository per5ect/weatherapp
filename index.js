const getHelsinkiWeatherButton = document.getElementById("get-pardubice-weather")

getHelsinkiWeatherButton.addEventListener("click", () => {
    getWeatherByCity("Pardubice")
        .then(data => {
            console.log(data)
            console.log("Timestamp: " + new Date(data.list[0].dt) )
        })
})


function getWeatherByCity(city){
    const API_KEY = "c11f5283f7c5f6e1dc43dc9f83bf3b1d"
    const CNT_COUNT = 5
    const UNITS = "metric"

    return appFetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${UNITS}&cnt=${CNT_COUNT}`)
}

function appFetch( url, options){
    return fetch(url, options)
        .then(response => response.json())
        .catch(err => {
            throw new Error(err)
        })
}

