import { Component, useState } from "react";
import "./App.css";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainHeader from "./component/layout/MainHeader";
import DetailPage from "./pages/DetailPage";
import HashTagTemplate from "./component/hashtag/HashTagTemplate";

//검색과 지도 선택에 사용될 useState

class App extends Component {
  render() {
    return (
      <Routes className="Body">
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/shows/:showId" element={<DetailPage />}></Route>
      </Routes>
    );
  }
}

export default App;
