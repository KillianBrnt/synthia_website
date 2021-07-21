import React from "react";
import NewsletterPage from "./NewsletterPage";

const NewsletterPageContainer = () => {
  const places = [
    {
      title: "News Letter",
      description:
        "A short description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const pushMail = (mail) => {
    //add error gestion for invalid mail format
    //add error gestion if mail already exist in db

    console.log(mail);
  }

  return <NewsletterPage pushMail={pushMail} places={places}/>;
};

export default NewsletterPageContainer;