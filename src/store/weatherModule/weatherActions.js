export const getWeatherData = (lat,lon) => {
    // console.log(lat,lon)
    return {
        type: "REQUEST_WEATHER_DATA",
        lattitude:lat,
        longitude:lon
    }
}

// export const getUserDetails = (ID) => {
//     console.log("getUserDetails     " + ID)
//     return {
//         type: "REQUEST_USER_DETAILS",
//         id:ID
//     }
// }