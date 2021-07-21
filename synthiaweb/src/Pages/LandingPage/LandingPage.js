import React from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { makeStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import ImageAndTextCard from "../../Components/ImageAndTextCard";
import useWindowPosition from "../../hook/useWindowPosition";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/background1.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  synthiaInfo: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.synthiaInfo} id="synthia-info">
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div className={classes.synthiaInfo}>
            <ImageAndTextCard place={props.places[0]} />
            <ImageAndTextCard place={props.places[1]} />
            <ImageAndTextCard place={props.places[2]} />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

LandingPage.defaultProps = {
  places: [],
};

LandingPage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default LandingPage;
