const initialState = {
  data: [],
};

const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_FETCHED_DATA":
      return {
        ...state,
        data: action.fetchedWeatherData,
      };
    default:
      return {
        ...state,
      };
  }
};

export default weatherData;
