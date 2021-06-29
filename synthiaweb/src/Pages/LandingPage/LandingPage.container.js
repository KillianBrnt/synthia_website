import React from "react";
import LandingPage from "./LandingPage";

const LandingPageContainer = () => {
  const places = [
    {
      title: "First Title",
      description:
        "A short description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: process.env.PUBLIC_URL + "/assets/BackGroundTemp.jpeg",
    },
    {
      title: "Second Title",
      description:
        "A short description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: process.env.PUBLIC_URL + "/assets/BackGroundTemp.jpeg",
    },
    {
      title: "Third Title",
      description:
        "A short description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: process.env.PUBLIC_URL + "/assets/BackGroundTemp.jpeg",
    },
  ];

  return <LandingPage places={places} />;
};

export default LandingPageContainer;
