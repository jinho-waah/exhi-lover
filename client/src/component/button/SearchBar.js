import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { debounce } from "lodash";

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

  // debounce 함수로 onSearch 호출을 제어
  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value); // 일정 시간이 지난 후에만 onSearch 호출
    }, 500), // 500ms 동안 입력이 없을 때만 호출
    [onSearch]
  );

  const onChange = useCallback(
    (e) => {
      setSearchString(e.target.value); // 입력 값을 업데이트
      debouncedSearch(e.target.value); // 디바운스된 검색 호출
      e.preventDefault();
    },
    [debouncedSearch]
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
