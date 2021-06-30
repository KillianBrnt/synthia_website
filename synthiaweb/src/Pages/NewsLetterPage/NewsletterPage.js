import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import TextCard from "../../Components/TextCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/BackGroundTemp.jpeg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const NewsletterPage = (props) => {
  const classes = useStyles();
  const text = {
    title: "News Letter",
    description:
      "A short description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TextCard place={text} pushMail={props.pushMail}/>
      </div>
    </div>
  );
};

NewsletterPage.propTypes = {
  pushMail: PropTypes.func.isRequired,
};

export default NewsletterPage;
