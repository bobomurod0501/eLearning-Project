import React from "react";
// import Nav from "../components/Nav";
// import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Courses from "./pages/Courses";

function NewCoursesPage() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Courses />
    </div>
  );
}

export default NewCoursesPage;
