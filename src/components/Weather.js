import React from "react";
// import icon from "../assets/images/04d.png";
import Loader from "./Loader";
import { makeStyles } from "@material-ui/core";

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
      fontSize: "35px",
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
      height: "200px",
      width: "200px",
    },
  },
  headerDiv: {
    height: "auto",
    padding: ".5rem 2rem",
    backgroundColor: "#464b60",
    fontSize: "20px",
    color: "#fffefe",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: "10px 10px",
    borderTopRightRadius: "10px 10px",
  },
}));

const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const Weather = (props) => {
  const { weatherData } = props;
  const { data, isLoading } = weatherData;
  const classes = useStyles();

  let time = new Date();

  const dayToday = days[time.getDay()];

  const getTodayDate = `${time.getDate()} ${months[time.getMonth()]}`;

  const newTime = `${
    time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`
  }:${time.getMinutes() >= 10 ? time.getMinutes() : `0${time.getMinutes()}`} ${
    time.getHours() >= 12 ? "PM" : "AM"
  }`;

  function importAll(r) {
    const images = {};
    r.keys().map((item, index) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }
  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      {isLoading && <Loader />}
      {Object.keys(data).length > 0 && (
        <>
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
                {/* <h3>{newTime}</h3> */}
                <div className={classes.center}>
                  <p>{data.main.temp}&#8451;</p>
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
        </>
      )}
    </>
  );
};
export default Weather;
