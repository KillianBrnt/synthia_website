import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Markdown from "./modules/components/Markdown";
import Typography from "./modules/components/Typography";
import TopAppBar from "./modules/views/TopAppBar";
import AppFooter from "./modules/views/AppFooter";
import withRoot from "./modules/withRoot";
import priv from "./modules/views/priv.md";

function Privacy() {
  const [md, setMd] = React.useState("");

  fetch(priv)
    .then((res) => res.text())
    .then((md) => {
      setMd(md);
    });

  return (
    <React.Fragment>
      <TopAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{md}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
