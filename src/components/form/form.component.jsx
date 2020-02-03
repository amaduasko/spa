import React, { useState} from "react";
import styled from "styled-components";
import { Btn } from "../Button/Button.component";
import { Input, Form, Col } from "reactstrap";

const Title = styled.h4`
  color: #413d4b;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  text-align: center;
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const AppForm = () => {
  const [formName, setName] = useState('')
  const [formEmail, setEmail] = useState("");
  const [formMessage, setMessage] = useState("");
  const [formSubject, setSubject] = useState("");
  
  const handleNameChange = (event) => setName(event.target.Value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleMessageChange = (event) => setMessage(event.target.value)
  const handleSubjectChange = (event) => setSubject(event.target.value)
  
  const submitFormValue = event => {
    event.preventDefault();
    const value = {
      name: formName,
      email: formEmail,
      message: formMessage,
      subject: formSubject
    }
    console.log(value)
  }

  return (
    <Col lg="5" md="7" className="m-auto">
      <Form className="w-100" onSubmit={submitFormValue}>
        <Title className="mb-4 mt-5">GIVE US A GOOD NEWS</Title>
        <Input
          className="mt-2 mb-2 ml-auto mr-auto rounded-0 col-11"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleNameChange}
        />
        <Input
          className="mt-2 mb-2 ml-auto mr-auto rounded-0 col-11"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <Input
          className="mmt-2 mb-2 ml-auto mr-auto rounded-0 col-11"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          onChange={handleSubjectChange}
        />
        <Input
          className="mt-2 mb-2 ml-auto mr-auto rounded-0 col-11"
          style={{ height: "200px" }}
          type="textarea"
          name="text"
          placeholder="Your Message"
          id="formText"
          onChange={handleMessageChange}
        />
        <Btn
        type="submit" 
        text="submit" 
        className="m-auto pl-4 pr-4" />
      </Form>
    </Col>
  );
};
