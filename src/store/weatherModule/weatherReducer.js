const initialState = {
  data: {},
  isLoading: true,
};

const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_FETCHED_DATA":
      return {
        ...state,
        data: action.fetchedWeatherData,
        isLoading: false,
      };

    case "REQUEST_WEATHER_DATA_BY_CITY":
      return {
        ...state,
        isLoading: true,
      };
    case "WEATHER_FETCHED_DATA_BY_CITY_NAME":
      return {
        ...state,
        data: action.fetchedWeatherData,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default weatherData;
