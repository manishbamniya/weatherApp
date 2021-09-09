import React, { useEffect } from "react";
import { connect } from "react-redux";
import Weather from "../components/weather/Weather";
import { getWeatherData } from "../store/weatherModule/weatherActions";

const WeatherPage = (props) => {
  const { getWeatherData, weatherData } = props;
  
  let lattitude;
  let longitude;
  navigator.geolocation.getCurrentPosition((position) => {
    lattitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });

  useEffect(() => {
    getWeatherData(lattitude, longitude);
    // eslint-disable-next-line
  }, []);

  return <Weather weatherData={weatherData.data} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: (lat, lon) => {
      dispatch(getWeatherData(lat, lon));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
