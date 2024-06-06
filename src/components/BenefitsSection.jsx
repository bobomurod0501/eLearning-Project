import React from "react";
import benefitsBrandImg from "../images/benefitsBrandImg.jpg"
import { About, Description ,Image} from "../Style";
import styled from "styled-components";

const BenefitsSection = () => {
    return <Benefits>
        <Description > 
            <h2>High-Quality Teaching System</h2>
            <div className="benefit">
                <h3>Onlain Platform</h3>
                <h3>High experienced and talented mentors</h3>
                <h3>Fast learning system</h3>
                <h3>Offline school for children</h3>
            </div>
        </Description>
       <Image>
         <img src={benefitsBrandImg} alt="benefitsBrandImg" />
       </Image>
    </Benefits>
}
const Benefits = styled(About)`
flex-direction: row-reverse;
gap: 10rem;
h2{
    color: #ff80ed;
    margin: 2rem;
    width: 100%;
}
h3{
    background-color: aliceblue;
    color: #000;
    margin: 2rem;
    width: 70%;
    padding: 10px 20px;
    font-size: 1.4rem;
    clip-path: polygon(0 12%, 100% 0, 100% 88%, 0% 100%);
    border-left: 4px solid #ff80ed;

}
`;

export default BenefitsSection;