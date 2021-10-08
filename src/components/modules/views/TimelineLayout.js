import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import { styled } from "@mui/material/styles";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TypographyCustom from "../components/Typography";
import Typography from "@mui/material/Typography";

const Spacer = styled("div")(({ theme }) => ({
  opacity: 0,
  width: "100%",
  height: 80,
}));

export default function TimelineLayout() {
  return (
    <div>
      <TypographyCustom
        variant="h4"
        marked="center"
        align="center"
        component="h2"
      >
        Timeline
      </TypographyCustom>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            09/2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Idéation
            </Typography>
            <Typography marginRight="30%">
              Tout part d'un constat commun. Lors de nos différentes
              expériences, le manque d'organisation pendant les réunions coûte
              très cher en temps et en énergie. C'est pour cela que nous avons
              voulu améliorer le quotidien de tous les salariés avec notre
              solution innovante, Synthia.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            12/2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Prototypages
            </Typography>
            <Typography marginLeft="30%">
              Après avoir contacté, interrogé, et discuté avec de nombreux
              potentiels futures utilisateurs de notre outil, nous avons pu nous
              diriger vers une idée plus concrète de notre solution afin de
              créer un premier MVP (Minimum Viable Product).
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            08/2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Alpha
            </Typography>
            <Typography marginRight="30%">
              En partant de ce premier prototype, nous avons développé et affiné
              notre idée pour arriver à une première alpha. En alpha, notre
              solution Synthia était une application fonctionnelle permettant de
              créer et d'organiser des réunion.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            08/2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Beta
            </Typography>
            <Typography marginLeft="30%">
              De nombreux tests et retours utilisateurs nous ont permis
              d'avancer sereinement vers la beta de Synthia. Une beta composée
              d'une toute nouvelle application plus fluide et agréable que la
              dernière version et d'un boîtier Raspberry couplé à une IA
              performante permettant de synthétiser le texte écouté.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Spacer />
    </div>
  );
}
