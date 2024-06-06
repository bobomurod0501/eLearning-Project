import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Javascript1 from "../images/javascript1.png";
import ReactLogo from "../images/react.avif";
import Soon from "../images/Coming-Soon-Logo.jpg";
import { motion } from "framer-motion";
import { pageAnimaton } from "../Animation";

const Courses = () => {
  return (

      <StyledCourses variants={pageAnimaton} initial="hidden" animate="show">
        <Course>
          <h2>Interactive React</h2>
          <div className="line"></div>
          <a href="/courses/react">
            <img src={ReactLogo} alt="" />
          </a>
        </Course>
        <Course>
          <h2>Interactive JavaScript</h2>
          <div className="line"></div>
          <a href="/courses/javascript">
            <img src={Javascript1} alt="" />
          </a>
        </Course>
        <Course>
          <h2>Soon...</h2>
          <div className="line"></div>
          <a href="/courses/soon">
            <img src={Soon} alt="" />
          </a>
        </Course>
      </StyledCourses>
  );
};

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Course = styled.div`
  padding-bottom: 10rem;
  img {
    width: 100%;
    height: 70vh;
  }
  .line {
    height: 0.2rem;
    background-color: #dad9d9;
    margin-bottom: 5rem;
  }

`;
const CoursesBox = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export default Courses;
