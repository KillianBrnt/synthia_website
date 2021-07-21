import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import TextCard from "../../Components/TextCard";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/background1.png"
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
  const [checked, setChecked] = useState(false);
  const text = {
    title: "News Letter",
    description:
      "A short description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <TextCard place={text} pushMail={props.pushMail} />
        </Collapse>
      </div>
    </div>
  );
};

NewsletterPage.propTypes = {
  pushMail: PropTypes.func.isRequired,
};

export default NewsletterPage;
