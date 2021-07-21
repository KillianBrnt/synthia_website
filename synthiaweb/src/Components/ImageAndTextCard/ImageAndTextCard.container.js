import React from "react";
import ImageAndTextCard from "./ImageAndTextCard";
import PropTypes from "prop-types";

const ImageAndTextCardContainer = (props) => {
  return <ImageAndTextCard place={props.place} />;
};

ImageAndTextCardContainer.defaultProps = {
  place: {
    title: "No title",
    description: "no description provided",
    imageUrl: "",
  },
};

ImageAndTextCardContainer.propTypes = {
  place: PropTypes.object,
};

export default ImageAndTextCardContainer;
