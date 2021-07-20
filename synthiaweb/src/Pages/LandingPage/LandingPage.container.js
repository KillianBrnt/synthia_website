import React from "react";
import LandingPage from "./LandingPage";

const LandingPageContainer = () => {
  const places = [
    {
      title: "Application mobile et web",
      description:
        "L’outil de synthétisation vocal Synthia est composé de deux applications pour les plateformes mobiles et web. Avec l’application web Synthia, vous allez pouvoir de créer des réunions ainsi que les gérer depuis votre dashboard interne. En plus d’administrer vos réunions, l’application mobile vous permettra de lancer l’assistant vocal.",
      imageUrl: process.env.PUBLIC_URL + "/assets/AppImage.png",
    },
    {
      title: "Asisstant vocal",
      description:
        "En plus de ses deux applications, Synthia est composé d’un boitier d’assistance vocal vous accompagnant durant vos réunions. L’assistant se lancera depuis l’application mobile et suivra le cours de votre réunion. Une fois la réunion terminé, l’assistant enverra le contenu vers notre programme de synthétisation.",
      imageUrl: process.env.PUBLIC_URL + "/assets/MeetingImage.png",
    },
    {
      title: "Synthétisation",
      description:
        "La synthétisation sera la dernière étape avant d’accéder à votre compte-rendu final. La puissance de notre intelligence artificielle retranscrira fidèlement les différents points abordés lors de votre réunion grâce à des séries de mots clés. Une fois disponible, il vous sera possible de télécharger et des partager vos comptes-rendus avec vos collaborateurs.",
      imageUrl: process.env.PUBLIC_URL + "/assets/IAImage.png",
    },
  ];

  return <LandingPage places={places} />;
};

export default LandingPageContainer;
