import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const Spacer = styled("div")(({ theme }) => ({
  opacity: 0,
  width: "100%",
  height: 80,
}));

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {},
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  "&:hover .imageDesc": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    opacity: 1,
  },
  "& .imageDesc": {
    opacity: 0,
  },
  "& .spacer": {},
}));

const images = [
  {
    url: `/asset/hugo.jpeg`,
    title: "Hugo",
    width: "33%",
    desc: "Développeur Web et Devops",
    link: "https://www.linkedin.com/in/hugogagliardi/",
  },
  {
    url: `/asset/mati.jpg`,
    title: "Matias",
    width: "34%",
    desc: "Developpeur IA et Réseaux",
    link: "https://www.linkedin.com/in/matias-castro-guzman/",
  },
  {
    url: `/asset/louis.jpg`,
    title: "Louis",
    width: "33%",
    desc: "Développeur Web",
    link: "https://www.linkedin.com/in/louis-dautremer/",
  },
  {
    url: `/asset/dadou.png`,
    title: "Damien",
    width: "33%",
    desc: "Développeur IA",
    link: "https://www.linkedin.com/in/damien-madroszyk-70a74116a/",
  },
  {
    url: `/asset/kiki.png`,
    title: "Killian",
    width: "34%",
    desc: "Developpeur Mobile et Web",
    link: "https://www.linkedin.com/in/killian-brunet-ba4a91220/",
  },
  {
    url: `/asset/guillaume.png`,
    title: "Guillaume",
    width: "33%",
    desc: "Développeur IA",
    link: "https://www.linkedin.com/in/guillaume-houbion-6b974116a/",
  },
  {
    url: `/asset/pierro.png`,
    title: "Pierre",
    width: "50%",
    desc: "Développeur Web et documentation",
    link: "https://www.linkedin.com/in/pierre-delsirie-b29b30162/",
  },
  {
    url: `/asset/tyty.png`,
    title: "Tyliam",
    width: "50%",
    desc: "Développeur Mobile",
    link: "https://www.linkedin.com/in/tyliam-silvini/",
  },
];

export default function TeamMembers() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        L'équipe
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => window.open(image.link)}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                display: "block",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageDesc"
              >
                {image.desc}
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
      <Spacer />
    </Container>
  );
}
