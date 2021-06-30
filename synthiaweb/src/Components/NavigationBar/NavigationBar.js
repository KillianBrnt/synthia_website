import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    fontFamily: "Nunito",
  },
  colorText: {
    color: "#4dd2f7",
  },
  wrapper: {
    flexGrow: "0.8",
    display: "flex",
  },
  button: {
    marginTop: theme.spacing(1),
    justifyContent: "flex-start",
    align: "left",
    color: "white",
    "&:hover": {
      background: "none",
      color: "white",
    },
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  menu: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.wrapper}>
            <h1 className={classes.appbarTitle}>
              Synth<span className={classes.colorText}>IA</span>
            </h1>
            <Button
              color="primary"
              className={classes.button}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/");
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/newsletter");
              }}
            >
              Newsletter
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/Someotherpage");
              }}
            >
              Example
            </MenuItem>
          </Menu>
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
