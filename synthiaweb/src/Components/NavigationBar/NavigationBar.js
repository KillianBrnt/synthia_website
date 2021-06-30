import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { List, ListItem, Divider, SwipeableDrawer } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  mobileTitle: {
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
  list: {
    width: 250,
  },
  drawer: {
    background: "rgba(0,0,0,0.5)",
  },
}));

const HideOnScroll = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  if (matches) {
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );  
  } else {
    return <> {children} </>
  }
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavigationBar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const mobileVersion = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.mobileTitle}>
              Home
            </Typography>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/newsletter" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.mobileTitle}>
              Newsletter
            </Typography>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/Someotherpage" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.mobileTitle}>
              Example
            </Typography>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
            <div className={classes.wrapper}>
              <h1 className={classes.appbarTitle}>
                Synth<span className={classes.colorText}>IA</span>
              </h1>
              <Button
                color="primary"
                className={classes.button}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </Button>
            </div>
            <SwipeableDrawer
              classes={{ paper: classes.drawer }}
              anchor={"right"}
              open={state}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {mobileVersion()}
            </SwipeableDrawer>
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
      </HideOnScroll>
    </div>
  );
};

export default NavigationBar;
