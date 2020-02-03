import React from "react";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import "./expertise.styles.scss";
import { expertiseInfo } from "../../constants/constants";

const Icon = styled.img`
  display: block;
`;
const Title = styled.h5`
  color: #413d4b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.7px;
`;
const Text = styled.p`
  width: 75%;
  color: #333333;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.7px;
  text-align: center;
  margin: auto;
  @media only screen and (max-width: 768px) {
    line-height: 18px;
    font-size: 12px;
  }
`;

const ExpertiseItem = ({ index, title, icon, text }) => (
  <Col
    xs="12"
    className={index === 1 ? "pt-4 pb-4 col-border col-md" : "pt-4 pb-4 col-md"}
  >
    <Icon className="m-auto mt-2" src={icon} alt="icon" />
    <Title className="mb-3 mt-5">{title}</Title>
    <Text>{text}</Text>
  </Col>
);

export const Expertise = () => (
  <Container id="expertise">
    <h4 className="exp-title">EXPERTISE</h4>
    <p className="exp-caption">
      Lorem ipsum dolor sit amet proin gravida nibh vel velit
    </p>
    <hr
      className="mb-5"
      style={{ backgroundColor: "#413d4b", width: "5%", opacity: "0.3" }}
    />
    {expertiseInfo.map((row, index) => (
      <Row
        key={index}
        className={
          index === 0 ? "ml-0 mr-0 mt-5 row-border" : "mb-5 ml-0 mr-0 md-row"
        }
      >
        {row.map((item, item_index) => (
          <ExpertiseItem key={item_index} index={item_index} {...item} />
        ))}
      </Row>
    ))}{" "}
  </Container>
);
