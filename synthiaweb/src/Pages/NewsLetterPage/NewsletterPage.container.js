import React from "react";
import NewsletterPage from "./NewsletterPage";

const NewsletterPageContainer = () => {
  
  const pushMail = (mail) => {
    //add error gestion for invalid mail format
    //add error gestion if mail already exist in db

    console.log(mail);
  }

  return <NewsletterPage pushMail={pushMail} />;
};

export default NewsletterPageContainer;
