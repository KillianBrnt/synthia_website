import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import EmailCard from "../../Components/EmailCard";

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
  },
}));

const NewsletterPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <EmailCard pushMail={props.pushMail} />
      </div>
    </div>
  );
};

NewsletterPage.propTypes = {
  pushMail: PropTypes.func.isRequired,
};

export default NewsletterPage;
