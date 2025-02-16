export const formatTemperature = (temperature) => {
    if(!temperature){
        throw new Error("Temperature is not provided")
    }
    const roundFloorTemp = Math.floor(temperature)

    return `${roundFloorTemp}°`
}

export const formatTemperatureMax = (temperature) => {
    if (!temperature) {
        throw new Error("Temperature is not provided");
    }
    return `${Math.ceil(temperature)}°`;
};

export const formatTemperatureMin= (temperature) => {
    if (!temperature) {
        throw new Error("Temperature is not provided");
    }
    return `${Math.round(temperature)}°`;
};

export const formatChanger = (temperature) => {
    if(!temperature){
        throw new Error("Temperature is not provided")
    }
    const roundFloorTemp = Math.floor(temperature)

    return roundFloorTemp
}

