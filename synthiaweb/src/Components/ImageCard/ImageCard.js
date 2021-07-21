import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.0)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
});

export default function ImageCard(props) {
  const classes = useStyles();

  return (
      <Card elevation={0} className={classes.root}>
        <CardMedia
           className={classes.media}
           image={props.place.imageUrl}
        />
      </Card>
  );
}

ImageCard.defaultProps = {
  place: {
    imageUrl: "",
  },
};

ImageCard.propTypes = {
  place: PropTypes.object,
};
