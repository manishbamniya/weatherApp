import React from "react";
import classes from "./Weather.module.css";
import icon from "../../assets/images/04d.png";

const Weather = (props) => {
  const { weatherData } = props;
  let time = new Date();

  let newTime = `${
    time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`
  }:${time.getMinutes() >= 10 ? time.getMinutes() : `0${time.getMinutes()}`} ${
    time.getHours() >= 12 ? "PM" : "AM"
  }`;

  return (
    <>
      {Object.keys(weatherData).length > 0 && (
        <div className={classes.root}>
          <div className={classes.weather}>
            <h1>{weatherData.name}</h1>
            <h3>{newTime}</h3>
            <div className={classes.center}>
              <p>{weatherData.main.temp} &#8451;</p>
            </div>
            <h2>
              {weatherData.weather[0].main} (
              {weatherData.weather[0].description})
            </h2>
          </div>
          <div className={classes.icon}>
            <img alt="weather icon" src={icon}></img>
          </div>
        </div>
      )}
    </>
  );
};
export default Weather;
