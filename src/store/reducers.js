import { combineReducers } from "redux";
import weatherData from "./weatherModule/weatherReducer";
import WeatherForecastReducer from "./weatherForecastModule/WeatherForecastReducer";

const reducer = combineReducers({
  weatherData: weatherData,
  weatherForecastData: WeatherForecastReducer,
});

export default reducer;
