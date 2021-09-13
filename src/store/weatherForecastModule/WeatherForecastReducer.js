const initialState = {
  data: [],
};
const WeatherForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVED_WEATHER_FORECAST_DATA":
      return {
        ...state,
        data: action.weatherForecastData,
      };
    case "RECEIVED_WEATHER_FORECAST_DATA_BY_CITY":
      return {
        ...state,
        data: action.weatherForecastData,
      };
    default:
      return {
        ...state,
      };
  }
};
export default WeatherForecastReducer;
