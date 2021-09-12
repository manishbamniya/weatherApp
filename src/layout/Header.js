import React from "react";
import SearchWeather from "../components/SearchWeather";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  rootDiv: {
    backgroundColor: "hsl(222.2, 20.6%, 25.7%)",
    padding: "1rem 0",
  },
  header: {
    margin: "0 20%",
    display: "flex",
    justifyContent: "space-between",
    border: "none",
    "& h2": {
      color: "white",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootDiv}>
      <div className={classes.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Weather App</h2>
        </Link>
        <SearchWeather />
      </div>
    </div>
  );
};
export default Header;
