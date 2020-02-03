import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Btn } from "../Button/Button.component";
const Title = styled.h4`
  color: #413d4b;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  @media only screen and (max-width: 576px) {
    font-size: 15px;
  }
`;
const Link = styled.a`
  color: #413d4b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.7px;
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const Works = () => (
  <div id="works">
    <Col
      md="9"
      xs="12"
      className="d-flex justify-content-between ml-auto mr-auto mt-5 mb-5"
    >
      <Title className="mt-2">Our Works</Title>
      <Link href="/" className="mt-2">
        See all project in dribbble >
      </Link>
    </Col>
    <Row className="ml-0 mr-0">
      <Col
        className="text-light"
        style={{ height: "250px", backgroundColor: "#212121" }}
      >
        1
      </Col>
      <Col
        className="text-light"
        style={{ height: "250px", backgroundColor: "#c3c3c3" }}
      >
        2
      </Col>
      <Col
        className="text-light"
        style={{ height: "250px", backgroundColor: "#212121" }}
      >
        3
      </Col>
      <Col
        className="text-light"
        style={{ height: "250px", backgroundColor: "#c3c3c3" }}
      >
        4
      </Col>
      <Col
        className="text-light"
        style={{ height: "250px", backgroundColor: "#212121" }}
      >
        5
      </Col>
      <Col
        className="text-light"
        style={{ height: "250px", backgroundColor: "#c3c3c3" }}
      >
        6
      </Col>
    </Row>
    <Container className="mt-5 mb-5">
      <Btn text="load more" className="m-auto" />
    </Container>
  </div>
);
