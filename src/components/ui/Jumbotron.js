import React from "react";
import { makeStyles } from "@material-ui/core";
import backgroundImage from "../../assets/images/bg4.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "70vh",
    "& img": {
      width: "100%",
      height: "100%",
      padding:"0",
      margin:"0",
      opacity:"0.8"
    },
  },
}));

const Jumbotron = () => {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <img alt="jumbo image" src={backgroundImage} />
    </span>
  );
};

export default Jumbotron;
