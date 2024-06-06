import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Javascript1 from "../images/javascript1.png";
import ReactLogo from "../images/react.avif";
import Soon from "../images/Coming-Soon-Logo.jpg";
import { motion } from "framer-motion";
import { pageAnimaton } from "../Animation";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const {pathname} = useLocation()
  return (

      <StyledCourses variants={pageAnimaton} initial="hidden" animate="show">
        <Course>
          <h2>Interactive React</h2>
          <div className="line"></div>
          <Link to="/courses/react">
            <img src={ReactLogo} alt="" />
          </Link>
          
        </Course>
        <Course>
          <h2>Interactive JavaScript</h2>
          <div className="line"></div>
          <Link to="/courses/javascript">
            <img src={Javascript1} alt="" />
          </Link>
        </Course>
        <Course>
          <h2>Soon...</h2>
          <div className="line"></div>
          <Link to="/courses/soon">
            <img src={Soon} alt="" />
          </Link>
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
const Line = styled(motion.div)`
  width: 100%;
  height: 0.2rem;
  background-color: #ff80ed;
`
export default Courses;
