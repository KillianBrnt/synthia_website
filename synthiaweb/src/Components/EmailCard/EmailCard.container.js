import React from "react";
import EmailCard from "./EmailCard";
import PropTypes from "prop-types";

const EmailCardContainer = (props) => {
  return <EmailCard pushMail={props.pushMail} />;
};

EmailCardContainer.propTypes = {
  pushMail: PropTypes.func.isRequired,
};

export default EmailCardContainer;
