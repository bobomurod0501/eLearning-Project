import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Toggle = ({children, title}) => {
    console.log(children)
    const [toggle, setToggle] = useState(false)
    return <motion.div layout onClick={() => setToggle(!toggle)}>
        <motion.h4 layout ><QuestionBox>{title} { <FontAwesomeIcon icon={toggle ? faChevronUp : faChevronDown} />}</QuestionBox></motion.h4>
        {toggle ?  children : ""}
    
    <div className="faq-liner"></div>
    </motion.div>
}

const QuestionBox = styled.div`
    display: flex;
    justify-content: space-between;
`
export default Toggle;