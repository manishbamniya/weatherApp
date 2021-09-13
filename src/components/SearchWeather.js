import React, { useRef } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import { Input } from "@material-ui/core";
// import { InputAdornment } from "@material-ui/core";
import { connect } from "react-redux";
import { getWeatherDataByCityName } from "../store/weatherModule/weatherActions";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchWeather: {
    "& form": {
      "& input": {
        width: "280px",
        height: "2rem",
        margin: "0 0.5rem",
        padding: "1rem",
        border: "none",
        borderRadius: " 20px",
        outline: "none",
        fontSize: "18px",
        fontWeight: "600",
      },
      "& button": {
        color: "black",
        cursor: "pointer",
        height: "2rem",
        width: "140px",
        border: "none",
        borderRadius: "25px",
        outline: "none",
        fontSize: "18px",
        fontWeight: "600",
        transition: "all 0.2s ease-in",
      },
      "& button:hover": {
        backgroundColor: "rgb(164, 234, 255)",
        color: "black",
      },
    },
  },
}));

const SearchWeather = (props) => {
  const inputCityRef = useRef();
  const { getWeatherByCity } = props;
  const classes = useStyles();
  const locationSubmitHandler = (e) => {
    e.preventDefault();
    getWeatherByCity(inputCityRef.current.value);
    inputCityRef.current.value = "";
  };

  return (
    <div className={classes.searchWeather}>
      <form onSubmit={locationSubmitHandler}>
        <input type="text" placeholder="Search By City" ref={inputCityRef} />
        <button type="submit">Search</button>
        {/* <SearchIcon />
        <Input
        
          endAdornment={
            <InputAdornment position="start" variant="outlined">
              <SearchIcon />
            </InputAdornment>
          }
        /> */}
      </form>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    getWeatherByCity: (city) => {
      dispatch(getWeatherDataByCityName(city));
    },
  };
};

export default connect(null, mapDispatchToProp)(SearchWeather);
