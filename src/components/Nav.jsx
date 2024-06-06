import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const Nav = () => {
    const {pathname} = useLocation()
    return <StyledNav>
        <h1>
            <Link id="logo" to="/">e-learning</Link>
        </h1>
        <ul>
            <li>
                <Link to="/">About us</Link>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === "/" ? "100%" : "0%"}}/>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
                <Line transition={{duration:0.61}} initial={{width:"0%"}} animate={{width: pathname === "/courses" ? "100%" : "0%"}}/>
                 <Line transition={{duration:0.61}} initial={{width:"0%"}} animate={{width: pathname === "/courses/react" ? "100%" : "0%"}}/>
                 <Line transition={{duration:0.61}} initial={{width:"0%"}} animate={{width: pathname === "/courses/javascript" ? "100%" : "0%"}}/>
                 <Line transition={{duration:0.61}} initial={{width:"0%"}} animate={{width: pathname === "/courses/soon" ? "100%" : "0%"}}/>
                </li>
            <li>
                <Link to="/contact">Contact us</Link>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === "/contact" ? "100%" : "0%"}}/>
                </li>
        </ul>
    </StyledNav>
    
}
const StyledNav = styled.nav`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #383e47;
    a{
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        
    }
    ul{
        display: flex;
        list-style: none;
        width: 30%;
        justify-content: space-between;
    }
    #logo{
       font-family: "Press Start 2P", system-ui;
       font-weight: 400;
       font-style: normal;
       font-size:1.5rem;
    }
`
const Line = styled(motion.div)`
  width: 100%;
  height: 0.2rem;
  background-color: #ff80ed;
`
export default Nav;