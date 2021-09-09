import React from "react";
import classes from "./SearchWeather.module.css";
// import SearchIcon from "@material-ui/icons/Search";
// import { Input } from "@material-ui/core";
// import { InputAdornment } from "@material-ui/core";

const SearchWeather = () => {
  const locationSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.searchWeather}>
      <form onClick={locationSubmitHandler}>
        <input type="text" placeholder="Enter City" />
        {/* <SearchIcon /> */}
        {/* <Input
        
          endAdornment={
            <InputAdornment position="start" variant="outlined">
              <SearchIcon />
            </InputAdornment>
          } */}
        {/* /> */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchWeather;
