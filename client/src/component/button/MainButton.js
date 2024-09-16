import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Search from "../search/Search";
import MapTemplate from "../map/MapTemplate";
import HashTagTemplate from "../hashtag/HashTagTemplate";
import useBearsStore from "../../lib/zustand/bearsStore";

const theme = createTheme({
  palette: {
    common: {
      white: {
        main: "#ffffff",
        contrastText: "#ffffff",
      },
    },
    error: {
      main: "#ffffff",
    },
  },
});

function MainButton() {
  const { buttonValue, setButtonValue } = useBearsStore();

  const activateTextField = () => {
    setButtonValue(0);
  };
  const activateHashTag = () => {
    setButtonValue(1);
  };
  const activateMap = () => {
    setButtonValue(2);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#000000",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            color="error"
            sx={{
              paddingTop: "30px",
              paddingBottom: "20px",
              color: "white",
            }}
          >
            <Button sx={{ color: "white" }} onClick={activateTextField}>
              Search
            </Button>
            <Button sx={{ color: "white" }} onClick={activateHashTag}>
              Map
            </Button>
            <Button sx={{ color: "white" }} onClick={activateMap}>
              HashTag
            </Button>
          </ButtonGroup>
        </ThemeProvider>
      </Box>
      <div>{buttonValue === 0 && <Search />}</div>
      <div>{buttonValue === 1 && <MapTemplate />} </div>
      <div>{buttonValue === 2 && <HashTagTemplate />}</div>
    </div>
  );
}

export default React.memo(MainButton);
