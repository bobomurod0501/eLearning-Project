import React from "react";
import home_intro from "../images/introImg.jpg";
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../Style";
import { motion, transform } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 style={{color:"#696969"}} className="header-title">Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <h2 style={{color:"#696969"}} className="header-title">
              you <span>can change</span>
            </h2>
          </Hide>
          <Hide>
            <h2 style={{color:"#696969"}} className="header-title">the world.</h2>
          </Hide>
        </motion.div>
        <p>
          An educated mind can teach many. An educated mind is better than empty
          one.
        </p>
        <button>About us</button>
      </Description>
      <Image>
        <img src={home_intro} alt=""  className="header-img" />
      </Image>
    </About>
  );
};

export default AboutSection;
