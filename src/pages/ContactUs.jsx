import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Card>
      <form>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We`ll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </form>
    </Card>
  );
};

export default ContactUs;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: #111a24;
  margin: 50px auto;
  padding: 100px 0px;
  border-radius: 10px;
  color: white;
  input{
    background-color: initial;
    color: white;
    
  }
  
`;
