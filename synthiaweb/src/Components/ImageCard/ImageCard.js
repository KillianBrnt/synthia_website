import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.0)",
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
  content: {
    backgroundColor: "#ace1ed",
  },
});

export default function ImageCard(props) {
  const classes = useStyles();

  return (
      <Card elevation={0} className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
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
        </CardContent>
      </Card>
  );
}

ImageCard.defaultProps = {
  place: {
    title: "No title",
    description: "no description provided",
    imageUrl: "",
  },
};

ImageCard.propTypes = {
  place: PropTypes.object,
};
