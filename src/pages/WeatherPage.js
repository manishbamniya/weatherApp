import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Weather from "../components/Weather";
import { getWeatherData } from "../store/weatherModule/weatherActions";
import { getWeatherForecastFiveDaysData } from "../store/weatherForecastModule/WeatherForecastActions";
import WeatherForecast from "../containers/WeatherForecast";
import Loader from "../components/Loader";
import Error from "../components/Error";

const WeatherPage = (props) => {
  const [lattitude, setLattitude] = useState(30.33752575449114);
  const [longitude, setLongitude] = useState(76.8639550768954);
  const { getWeatherData, getWeatherForecastData, weatherData, isLoading } =
    props;

  console.log(weatherData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLattitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    getWeatherData(lattitude, longitude);
    getWeatherForecastData(lattitude, longitude);
    // eslint-disable-next-line
  }, [lattitude, longitude]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && weatherData.data.cod !== 200 && (
        <Error />
      )}
      {!isLoading && weatherData.data.cod === 200 && (
        <>
          <Weather weatherData={weatherData} />
          <WeatherForecast />
        </>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        getWeatherData: (lat, lon) => getWeatherData(lat, lon),
        getWeatherForecastData: (lat, lon) =>
          getWeatherForecastFiveDaysData(lat, lon),
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
    isLoading: state.weatherData.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
