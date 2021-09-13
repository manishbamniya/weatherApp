export const getWeatherForecastFiveDaysData = (lat,lon) => {
    return{
        type:"GET_WEATHER_FORECAST_FIVE_DAYS_DATA",
        lattitude:lat,
        longitude:lon
    }
}

export const getWeatherForecastFiveDaysDataByCity = (city) => {
    return {
        type:'GET_WEATHER_FORECAST_FIVE_DAYS_DATA_BY_CITY',
        city:city
    }
}