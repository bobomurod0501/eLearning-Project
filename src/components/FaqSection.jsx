import React from "react";
import styled from "styled-components";
import { About } from "../Style";
import Toggle from "./FaqToggle";
// import { AnimateSharedLayout } from "framer-motion";
import { LayoutGroup, motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any question about the <span>FAQ</span>
      </h2>
      <LayoutGroup>
      <Toggle title="Can I learn programing form 0 on your platform?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              dignissimos!
            </p>
          </div>
          
        </div>
      </Toggle>
      <Toggle title="How much is paid per month?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              dignissimos!
            </p>
          </div>
          
        </div>
      </Toggle>
      <Toggle title="Is it possible to pay in full in one go?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nisi ad error rerum suscipit aliquam velit? Quas dolores sed dignissimos alias a quibusdam, natus quos quaerat culpa illum eius facilis!
            </p>
          </div>
          
        </div>
      </Toggle>
      <Toggle title="If I buy the course , can my brother and I also study?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              dignissimos!
            </p>
          </div>
        </div>
      </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  color:#9a9a9a;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 0rem 0rem;
  }
  .faq-liner {
    margin-bottom: 2rem;
    background-color: #cfcfd0;
    width: 100%;
    height: 0.2rem;
  }
  @media screen and (max-width:1000px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 120%;
  }
`;



export default FaqSection;
