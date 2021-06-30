import React from "react";
import TextCard from "./TextCard";
import PropTypes from "prop-types";

const TextCardContainer = (props) => {
  return <TextCard place={props.place} checked={props.checked} pushMail={props.pushMail} />;
};

TextCardContainer.defaultProps = {
  place: {
    title: "No title",
    description: "no description provided",
  },
};

TextCardContainer.propTypes = {
  place: PropTypes.object,
  pushMail: PropTypes.func.isRequired,
};

export default TextCardContainer;
