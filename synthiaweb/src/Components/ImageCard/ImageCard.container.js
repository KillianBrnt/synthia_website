import React from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";

const ImageCardContainer = (props) => {
  return <ImageCard place={props.place} checked={props.checked} />;
};

ImageCardContainer.defaultProps = {
  place: {
    title: "No title",
    description: "no description provided",
    imageUrl: "",
  },
  checked: true,
};

ImageCardContainer.propTypes = {
  place: PropTypes.object,
  checked: PropTypes.bool,
};

export default ImageCardContainer;
