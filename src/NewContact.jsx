import React from "react";
// import { useState } from "react";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";

function NewContactUs() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ContactUs />
    </div>
  );
}

export default NewContactUs;