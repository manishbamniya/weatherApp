import React from "react";
import classes from "./Header.module.css";
import SearchWeather from "../components/searchWeather/SearchWeather";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.rootDiv}>
      <div className={classes.header}>
        <Link to="/" style={{textDecoration:"none"}}>
          <h2 >Weather App</h2>
        </Link>
        <SearchWeather />
      </div>
    </div>
  );
};
export default Header;
