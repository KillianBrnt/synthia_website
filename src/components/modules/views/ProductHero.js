import { withTranslation } from "react-i18next";
import Button from "../components/Button.js";
import { Fade } from "react-awesome-reveal";
import { styled } from "@mui/material/styles";
import Typography from "../components/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Spacer = styled("div")(({ theme }) => ({
  opacity: 0,
  width: "100%",
  height: 30,
}));

const Mockup = styled("img")(({ theme }) => ({
  paddingBottom: "30%",
  maxWidth: "200%",
  maxHeight: "80%",
  width: "auto",
  height: "auto",
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  maxWidth: "540px",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "4rem",
  },
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "100%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const LandingIntro = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container
      style={{
        background:
          "linear-gradient(to left, rgb(28, 146, 210, 0.3), rgb(242, 252, 254))",
        maxWidth: "100%",
      }}
    >
      <Container component="section" sx={{ pt: 20, pb: 0 }}>
        <Fade direction="right">
          <Grid container spacing={12}>
            <Grid item xs={12} md={6}>
              <ContentWrapper>
                <img
                  src={`/modiflogoV1.png`}
                  alt={"Synthia"}
                  width={"100%"}
                  height={"100%"}
                />
                <Spacer />
                <Typography variant="h5">
                  Vos différentes réunions en entreprise ayant lieu en semaine
                  n’ont que très peu ou pas de synthèse ? Alors Synthia est là
                  pour vous. En effet, grâce à une reconnaissance vocale et à
                  une préparation en amont depuis notre application, Synthia
                  écoutera et fera automatiquement une synthèse de la réunion
                  pour vous.
                </Typography>
                <Spacer />
                <ButtonWrapper>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.synthia.synthiaapp&gl=FR"
                      )
                    }
                  >
                    {"Download"}
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => scrollTo("about")}
                  >
                    {"Learn More"}
                  </Button>
                </ButtonWrapper>
              </ContentWrapper>
            </Grid>
            <Grid item xs={10} md={5}>
              <Mockup src={`/mockupApp.png`} alt={"Synthia"} />
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Container>
  );
};

export default withTranslation()(LandingIntro);
