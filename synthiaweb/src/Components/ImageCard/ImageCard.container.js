import React from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";

const ImageCardContainer = (props) => {
  return <ImageCard place={props.place} />;
};

ImageCardContainer.defaultProps = {
  place: {
    title: "No title",
    description: "no description provided",
    imageUrl: "",
  },
};

ImageCardContainer.propTypes = {
  place: PropTypes.object,
};

export default ImageCardContainer;
