import React from "react";
import { Container } from "reactstrap";
import { Btn } from "../Button/Button.component";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.32px;
  @media only screen and (max-width: 576px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.7;
  line-height: 24px;
  width: 78%;
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

export const Head = props => (
  <Container
    style={{
      margin: "auto",
      paddingTop: "10%",
      visibility: props.isToolbarOpen ? "hidden" : "visible"
    }}
  >
    <Title className="text-center"> We are awesome creative agency</Title>
    <hr style={{ backgroundColor: "#00e0d0", width: "5%" }} />
    <Text className="text-center ml-auto mr-auto mb-5">
      {" "}
      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
      auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
      consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
      nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
    </Text>
    <Btn text="learn more" className="m-auto" />
  </Container>
);
