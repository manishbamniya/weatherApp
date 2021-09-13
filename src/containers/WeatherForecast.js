import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import WeatherForecastData from "../components/WeatherForecastData";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#323544",
    marginTop: "1.5rem",
    borderRadius: "10px",
  },
}));

const WeatherForecast = (props) => {
  const classes = useStyles();
  const { weatherForecastData } = props;
  const weatherData = [];

  if (weatherForecastData) {
    for (let i = 1; i < weatherForecastData.length-1; i++) {
      weatherData.push(weatherForecastData[i]);
    }
  }

  return (
    <>
      <Grid container className={classes.root}>
        {weatherForecastData &&
          weatherData.map((data) => (
            <WeatherForecastData key={data.dt} weatherForecastData={data} />
          ))}
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    weatherForecastData: state.weatherForecastData.data.daily,
    isLoading: state.weatherForecastData.isLoading,
  };
};
export default connect(mapStateToProps, null)(WeatherForecast);
