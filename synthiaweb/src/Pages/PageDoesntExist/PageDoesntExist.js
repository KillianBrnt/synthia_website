import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/background1.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const PageDoesntExist = () => {
    const classes = useStyles();
  
  return (
    <div className={classes.root}>
      404 not found
    </div>
  );
}

export default PageDoesntExist