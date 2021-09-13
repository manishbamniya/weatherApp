import React from "react";
import { makeStyles } from "@material-ui/core";
import { days, months } from "../utils";
import { importAll } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#323544",
    marginTop: "2rem",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  weatherRootDiv: {
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  weather: {
    "& h1": {
      fontSize: "30px",
      color: "#bfc1c8",
    },
    "& h3": {
      color: "rgb(226, 214, 214)",
    },
    "& h2": {
      color: "#bfc1c8",
    },
  },

  center: {
    fontSize: "70px",
    color: "white",
    fontWeight: "700",
  },

  icon: {
    color: "white",
    "& img": {
      height: "220px",
      width: "230px",
    },
  },
  headerDiv: {
    height: "auto",
    padding: ".5rem 2rem",
    backgroundColor: "#464b60",
    fontSize: "20px",
    fontWeight:"600",
    color: "#fffefe",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: "10px 10px",
    borderTopRightRadius: "10px 10px",
  },
}));

const Weather = (props) => {
  const { weatherData } = props;
  console.log(weatherData);
  const { data } = weatherData;
  const classes = useStyles();

  let time = new Date();

  const dayToday = days[time.getDay()];

  const getTodayDate = `${time.getDate()} ${months[time.getMonth()]}`;

  const newTime = `${
    time.getHours() > 12 ? time.getHours() - 12 : `${time.getHours()}`
  }:${time.getMinutes() >= 10 ? time.getMinutes() : `0${time.getMinutes()}`} ${
    time.getHours() >= 12 ? "PM" : "AM"
  }`;

  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      {Object.keys(data).length > 0 && (
        <div className={classes.root}>
          <div className={classes.headerDiv}>
            <div>{dayToday}</div>
            <div>
              <span>{getTodayDate},</span>
              <span> {newTime}</span>
            </div>
          </div>
          <div className={classes.weatherRootDiv}>
            <div className={classes.weather}>
              <h1>
                {data.name}, {data.sys.country}
              </h1>
              <div className={classes.center}>
                <p>{Math.floor(data.main.temp)}&#8451;</p>
              </div>
              <h2>
                {data.weather[0].main} ({data.weather[0].description})
              </h2>
            </div>
            <div className={classes.icon}>
              <img
                alt="weather icon"
                src={images[`${data.weather[0].icon}.svg`].default}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Weather;
