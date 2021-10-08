import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbarTitle: {
    color: "#ace1ed ",
  },
  colorText: {
    color: "#4dd2f7",
  },
}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/home/"
            sx={{ fontSize: 24 }}
          >
            <h1 className={classes.appbarTitle}>
              Synth<span className={classes.colorText}>IA</span>
            </h1>
          </Link>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          ></Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

