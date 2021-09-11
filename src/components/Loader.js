import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"10rem 0"
  },

  colorOfLoader: {
    color: "white",
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <CircularProgress color="secondary" className={classes.colorOfLoader} size={100}/>
    </div>
  );
};

export default Loader;
