import React from "react";
import NewsletterPage from "./NewsletterPage";

const NewsletterPageContainer = () => {
  const places = [
    {
      imageUrl: process.env.PUBLIC_URL + "/assets/TestImage.png",
    }
  ];
  const pushMail = (mail) => {
    //add error gestion for invalid mail format
    //add error gestion if mail already exist in db

    console.log(mail);
  }

  return <NewsletterPage pushMail={pushMail} places={places}/>;
};

export default NewsletterPageContainer;