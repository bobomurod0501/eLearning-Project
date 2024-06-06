import React from "react";
// import { useState } from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
// import CourseDetail from "./pages/CourseDetail";

function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
      {/* <Courses /> */}
      {/* <CourseDetail /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

export default HomePage;