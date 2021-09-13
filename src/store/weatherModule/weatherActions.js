export const getWeatherData = (lat,lon) => {
    return {
        type: "REQUEST_WEATHER_DATA",
        lattitude:lat,
        longitude:lon
    }
}

export const getWeatherDataByCityName = (city) => {
    return {
        type: 'REQUEST_WEATHER_DATA_BY_CITY',
        city:city
    }
}
