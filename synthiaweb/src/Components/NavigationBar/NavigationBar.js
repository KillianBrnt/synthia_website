import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
    color: "#FFFFFF",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  appbarTitle: {
    flexGrow: "0.8",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#4dd2f7",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Synth<span className={classes.colorText}>IA</span>
          </h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Link>
          <Link to="/newsletter" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Newsletter
            </Typography>
          </Link>
          <Link to="/Someotherpage" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Example
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
