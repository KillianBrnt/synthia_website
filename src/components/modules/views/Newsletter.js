import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import { styled } from "@mui/material/styles";

const Spacer = styled("div")(({ theme }) => ({
  opacity: 0,
  width: "100%",
  height: 80,
}));

export default function Newsletter() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Newsletter
      </Typography>
      <Container component="section" sx={{ mt: 10, display: "flex" }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "rgb(93, 173, 226)",
                py: 8,
                px: 3,
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ maxWidth: 400 }}
              >
                <Typography variant="h2" component="h2" gutterBottom>
                  Me tenir informé
                </Typography>
                <Typography variant="h5">rejoignez notre newsletter</Typography>
                <TextField
                  noBorder
                  placeholder="Your email"
                  variant="standard"
                  sx={{ width: "100%", mt: 3, mb: 2 }}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: "100%" }}
                >
                  s'enregistrer
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
          >
            <Box
              component="img"
              src="/meeting.jpg"
              alt="call to action"
              sx={{
                position: "absolute",
                top: -28,
                left: -28,
                right: 0,
                bottom: 0,
                width: "100%",
                maxWidth: 600,
              }}
            />
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          closeFunc={handleClose}
          message="We will send you our best offers, once a week."
        />
      </Container>
      <Spacer />
    </div>
  );
}
