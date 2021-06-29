import React from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header";
import { makeStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import ImageCard from "../../Components/ImageCard";
import useWindowPosition from "../../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/BackGroundTemp.jpeg"
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
        <ImageCard place={props.places[0]} checked={checked} />
        <ImageCard place={props.places[1]} checked={checked} />
        <ImageCard place={props.places[2]} checked={checked} />
      </div>
    </div>
  );
};

ImageCard.defaultProps = {
  places: [],
};

ImageCard.propTypes = {
  place: PropTypes.arrayOf(PropTypes.object),
};


export default LandingPage;
