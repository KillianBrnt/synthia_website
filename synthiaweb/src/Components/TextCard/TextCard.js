import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EmailCard from "../../Components/EmailCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(140,217,234,0.7)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "white",
  },
});

export default function TextCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          {props.place.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {props.place.description}
        </Typography>
        <EmailCard pushMail={props.pushMail} />
      </CardContent>
    </Card>
  );
}

TextCard.defaultProps = {
  place: {
    title: "No title",
    description: "no description provided",
  },
};

TextCard.propTypes = {
  place: PropTypes.object,
};
