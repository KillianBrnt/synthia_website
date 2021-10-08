import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductHeroLayout from "./ProductHeroLayout";
import Box from '@mui/material/Box';

const backgroundImage = "/blue-1273089_1920.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  title: {
    color: "#ace1ed",
    fontSize: "4.5rem",
  },
  colorText: {
    color: "#4dd2f7",
  },
}));

const image = {
  height: 200,
};

export default function ProductHero() {
  const classes = useStyles();

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <br />
        </h1>
        <Box
          component="img"
          src="/asset/Logo1.png"
          alt="Synthia"
          sx={image}
        />
      </div>
    </ProductHeroLayout>
  );
}
