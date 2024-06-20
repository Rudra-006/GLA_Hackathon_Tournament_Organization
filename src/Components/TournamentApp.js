import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TournamentApp = () => {
  return (
    <Stack
      direction={"row"}
      spacing={5}
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
    >
      <Button variant="contained">
        <Link
          to={"/create"}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          Create Tournament
        </Link>
      </Button>
      <Button variant="contained">
        <Link
          to={"/tournamentList"}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          View Tournaments
        </Link>
      </Button>
    </Stack>
  );
};

export default TournamentApp;
