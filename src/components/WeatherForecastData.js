import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { days } from "../utils";
import { importAll } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginBottom: ".5rem",
    borderRadius: "5px",
    "& img": {
      width: "80%",
    },
    "& h3": {
      color: "white",
      marginBottom: "5px",
    },
  },
  headerDiv: {
    height: "auto",
    padding: ".5rem 2rem",
    backgroundColor: "#464b60",
    fontSize: "20px",
    color: "#fffefe",
    fontWeight:"600",
  },
  temp: {
    marginBottom: "5px",
    "& span": {
      fontSize: "24px",
      fontWeight: "600",
      color: "white",
    },
  },
  minMaxTemp: {
    display: "flex",
    justifyContent: "space-around",
    color: "#bfc1c8",
    fontSize: "12px",
    fontWeight: "600",
  },
}));

const WeatherForecastData = (props) => {
  const { weatherForecastData } = props;
  const classes = useStyles();
  const day = new Date(weatherForecastData.dt * 1000).getDay();

  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Grid item xs={2} className={classes.rootGrid}>
      <div className={classes.root}>
        <div className={classes.headerDiv}>{days[day]}</div>
        <img
          alt="weather forecast"
          src={images[`${weatherForecastData.weather[0].icon}.svg`].default}
        ></img>
        <div className={classes.temp}>
          <span>~{Math.floor(weatherForecastData.temp.day)}&#8451; </span>
        </div>
        <h3>{weatherForecastData.weather[0].main}</h3>
        <div className={classes.minMaxTemp}>
          <span>{Math.floor(weatherForecastData.temp.min)}&#8451; </span>
          <span>{Math.floor(weatherForecastData.temp.max)}&#8451; </span>
        </div>
        <div className={classes.minMaxTemp}>
          <span>Min </span>
          <span>Max </span>
        </div>
      </div>
    </Grid>
  );
};

export default WeatherForecastData;
