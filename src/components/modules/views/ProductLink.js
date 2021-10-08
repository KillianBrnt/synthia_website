import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function ProductLink() {
  const appPageUrl =
    "https://play.google.com/store/apps/details?id=com.synthia.synthiaapp&gl=FR";

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Box
        component="img"
        src="/google-play.svg"
        alt="mail"
        onClick={() => {
          window.open(appPageUrl, "_blank");
        }}
        sx={{ width: 60 }}
      />
    </Container>
  );
}
