import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainLayout: {
    margin: "1rem 25%",
    padding: ".5rem 1rem",
  },
}));
const MainLayout = (props) => {
  const classes = useStyles();
  return <div className={classes.mainLayout}>{props.children}</div>;
};
export default MainLayout;
