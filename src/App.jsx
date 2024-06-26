import React from "react";
// import { useState } from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
      <CourseDetail/>
    </div>
  );
}

export default App;
