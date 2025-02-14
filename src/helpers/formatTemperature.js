export const formatTemperature = (temperature) => {
    if(!temperature){
        throw new Error("Temperature is not provided")
    }
    const roundFloorTemp = Math.floor(temperature)

    return `${roundFloorTemp}°C`
}