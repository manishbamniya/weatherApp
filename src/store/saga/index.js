import { takeEvery, put, call, all } from "@redux-saga/core/effects";
import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "77ac17d81cfbf9ceb4c55e83863d0a35";

// const BY_LOCATION = 'lat={lat}&lon={lon}'

// const BY_CITY = 'q={city}'

// const fetchAllWeatherDataByCity = async () => {
//   const response = await axios(
//     `${BASE_URL}q=Ambala&appid=${API_KEY}&&units=metric`,
//     {
//       method: "GET",
//     }
//   );
//   const weatherAllData = await response.data;
//   return weatherAllData;
// };

const fetchAllWeatherDataByLocation = async (lat, lon) => {
  const response = await axios(
    `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`,
    {
      method: "GET",
    }
  );
  const weatherAllData = await response.data;
  console.log(weatherAllData);
  return weatherAllData;
};

function* fetchWeatherData(action) {
  const fetchedWeatherData = yield call(
    fetchAllWeatherDataByLocation,
    action.lattitude,
    action.longitude
  );
  yield put({ type: "WEATHER_FETCHED_DATA", fetchedWeatherData });
}

export default function* rootSaga() {
  yield all([takeEvery("REQUEST_WEATHER_DATA", fetchWeatherData)]);
}
