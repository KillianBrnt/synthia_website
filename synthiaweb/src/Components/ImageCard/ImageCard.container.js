import React from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";

const ImageCardContainer = (props) => {
  return <ImageCard place={props.place} />;
};

ImageCardContainer.defaultProps = {
  place: {
    imageUrl: "",
  },
};

ImageCardContainer.propTypes = {
  place: PropTypes.object,
};

export default ImageCardContainer;
