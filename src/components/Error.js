import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#323544",
    marginTop: "2rem",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    textAlign: "center",
    height: "30vh",
    alignItems: "center",
    "& h1": { color: "#fff", paddingTop: "4rem" },
    "& h2": { color: "#8891b0",marginTop:"1rem" },
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>City Not Found</h1>
      <h2>Please enter a valid city name</h2>
    </div>
  );
};

export default Error;
