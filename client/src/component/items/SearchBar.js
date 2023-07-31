import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
  },
});

const SearchBar = ({ onSearch }) => {
  const [searchString, setSearchString] = useState(""); // Add the useState hook
  const onChange = useCallback(
    (e) => {
      setSearchString(e.target.value);
      onSearch(e.target.value);
      e.preventDefault();
    },
    [onSearch]
  );
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#000000",
          //width: "30ch",
          width: "90%",
          maxWidth: "30rem",
          margin: "auto",
          paddingTop: "15px",
          paddingBottom: "20px",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            margin: "auto",
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <ThemeProvider theme={theme}>
            <TextField
              id="standard-search"
              type="text"
              variant="standard"
              color="white"
              placeholder="전시장, 전시회, 작가 이름 검색"
              value={searchString}
              onChange={onChange}
              inputProps={{
                style: {
                  color: "#fafafa",
                  fontFamily: "Happiness-Sans-Title",
                  fontSize: "16px",
                },
              }}
              focused
            />
          </ThemeProvider>
        </Box>
      </Paper>
    </>
  );
};

export default React.memo(SearchBar);
