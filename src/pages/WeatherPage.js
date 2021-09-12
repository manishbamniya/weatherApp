import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Weather from "../components/Weather";
import { getWeatherData } from "../store/weatherModule/weatherActions";

const WeatherPage = (props) => {
  const { getWeatherData, weatherData } = props;
  const [lattitude, setLattitude] = useState(30.33752575449114);
  const [longitude, setLongitude] = useState(76.8639550768954);
  // const currMinute = new Date().getMinutes();
  // const[currentMinute,setCurrentMinute] = useState(currMinute)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLattitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    getWeatherData(lattitude, longitude);
    // eslint-disable-next-line
  }, [lattitude, longitude]);

  return <Weather weatherData={weatherData} />;
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
