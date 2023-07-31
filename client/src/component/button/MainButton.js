import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Search from "../search/Search";
import MapTemplate from "../map/MapTemplate";
import HashTagTemplate from "../hashtag/HashTagTemplate";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
  },
});

function MainButton() {
  const [stat, changeStat] = useState(0);

  const activateTextField = () => {
    changeStat(0);
  };
  const activateHashTag = () => {
    changeStat(1);
  };
  const activateMap = () => {
    changeStat(2);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#000000",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 3,
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <ButtonGroup
            size="large"
            variant="text"
            aria-label="text button group"
            color="white"
            sx={{
              paddingRight: "25px",
              paddingTop: "2.5rem",
            }}
          >
            <Button sx={{ width: "90px" }} onClick={activateTextField}>
              Search
            </Button>
            <Button sx={{ width: "90px" }} onClick={activateHashTag}>
              HashTag
            </Button>
            <Button sx={{ width: "55px" }} onClick={activateMap}>
              Map
            </Button>
          </ButtonGroup>
        </ThemeProvider>
      </Box>
      <div>{stat === 0 && <Search />}</div>
      <div>{stat === 1 && <HashTagTemplate />}</div>
      <div>{stat === 2 && <MapTemplate />} </div>
    </div>
  );
}

export default React.memo(MainButton);
