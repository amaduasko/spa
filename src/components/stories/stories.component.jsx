import React from "react";
import styled from "styled-components";
import pyramid from "../../images/image_2.png";
import { Btn } from "../Button/Button.component";
import { Container, Row, Col } from "reactstrap";

const Image = styled.img`
  width: 100%;
`;
const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 22px;
  font-weight: 700;
  color: #413d4b;
  text-transform: uppercase;
  letter-spacing: 1.1px;
`;
const Text = styled.p`
  font-family: "Roboto", sans-serif;
  color: #413d4b;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.42;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Stories = () => (
  <Container className="mt-5 mb-5" id="about">
    <Row className="ml-0 mr-0 justify-content-center">
      <Col className="flex-grow-0 pt-md-3 " md="4">
        {" "}
        <Image src={pyramid} alt="pyramid" />{" "}
      </Col>
      <Col md="6">
        <Title className="mb-3">our story</Title>
        <Text>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus
        </Text>
        <Text>
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </Text>
        <Btn text="learn more" />
      </Col>
    </Row>
  </Container>
);
