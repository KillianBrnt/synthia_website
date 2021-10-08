import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function ProductFeatures() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/appCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/smartphone.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Application mobile
              </Typography>
              <Typography variant="h5">
                {
                  "L’outil de synthétisation vocal Synthia est composé d'une applications pour les plateformes mobiles. Avec l’application Synthia, vous allez pouvoir de créer des réunions ainsi que les gérer depuis votre dashboard interne. En plus d’administrer vos réunions, l’application mobile vous permettra de lancer l’assistant vocal."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/microphone.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Assistant vocal
              </Typography>
              <Typography variant="h5">
                {
                  "En plus de ses deux applications, Synthia est composé d’un boitier d’assistance vocal vous accompagnant durant vos réunions. L’assistant se lancera depuis l’application mobile et suivra le cours de votre réunion. Une fois la réunion terminé, l’assistant enverra le contenu vers notre programme de synthétisation."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="/ia.png" alt="ai" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Synthétisation
              </Typography>
              <Typography variant="h5">
                {
                  "La synthétisation sera la dernière étape avant d’accéder à votre compte-rendu final. La puissance de notre intelligence artificielle retranscrira fidèlement les différents points abordés lors de votre réunion grâce à des séries de mots clés. Une fois disponible, il vous sera possible de télécharger et des partager vos comptes-rendus avec vos collaborateurs."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
