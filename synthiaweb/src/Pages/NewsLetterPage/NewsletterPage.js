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
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const NewsletterPage = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

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
          <div className={classes.container}>
            <TextCard place={props.places[0]} pushMail={props.pushMail} />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

NewsletterPage.defaultProps = {
  places: [],
};

NewsletterPage.propTypes = {
  pushMail: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(PropTypes.object),
};

export default NewsletterPage;
