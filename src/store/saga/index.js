import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = "77ac17d81cfbf9ceb4c55e83863d0a35";

const fetchedWeatherDataByLocation = async (lat, lon) => {
  try {
    const response = await axios(
      `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`,
      {
        method: "GET",
      }
    );
    const weatherAllData = await response.data;
    return weatherAllData;
  } catch (error) {
    const weatherData = error;
    return weatherData;
  }
};

const fetchedWeatherDataByCityName = async (city) => {
  try {
    const response = await axios(
      `${BASE_URL}q=${city}&appid=${API_KEY}&&units=metric`,
      {
        method: "GET",
      }
    );
    const weatherAllData = await response.data;
    return weatherAllData;
  } catch (error) {
    const weatherData = error;
    return weatherData;
  }
};

const fetchWeatherForecastDataByLocation = async (lat, lon) => {
  try {
    const response = await axios(
      `${FORECAST_BASE_URL}lat=${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&appid=${API_KEY}&&units=metric`,
      {
        method: "GET",
      }
    );
    const weatherForecastedData = await response.data;
    return weatherForecastedData;
  } catch (error) {
    console.log(error);
  }
};

function* fetchWeatherData(action) {
  const fetchedWeatherData = yield call(
    fetchedWeatherDataByLocation,
    action.lattitude,
    action.longitude
  );
  yield put({ type: "WEATHER_FETCHED_DATA", fetchedWeatherData });
}

function* fetchWeatherDataByCityName(action) {
  const fetchedWeatherData = yield call(
    fetchedWeatherDataByCityName,
    action.city
  );
  yield put({
    type: "WEATHER_FETCHED_DATA_BY_CITY_NAME",
    fetchedWeatherData,
  });
}

function* fetchWeatherForecastData(action) {
  const weatherForecastData = yield call(
    fetchWeatherForecastDataByLocation,
    action.lattitude,
    action.longitude
  );
  yield put({ type: "RECEIVED_WEATHER_FORECAST_DATA", weatherForecastData });
}

export default function* rootSaga() {
  yield all([
    takeEvery("REQUEST_WEATHER_DATA", fetchWeatherData),
    takeEvery("REQUEST_WEATHER_DATA_BY_CITY", fetchWeatherDataByCityName),
    takeEvery("GET_WEATHER_FORECAST_FIVE_DAYS_DATA", fetchWeatherForecastData),
  ]);
  // yield all([]);
}
