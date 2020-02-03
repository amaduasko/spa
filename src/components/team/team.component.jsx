import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { teamMember } from "../../constants/constants";
import { Btn } from "../Button/Button.component";
import "./team.style.scss";

const TeamCart = ({ profileImg, name, post }) => (
  <Col xs="5" md="3">
    <Card>
      <CardImg top width="100%" src={profileImg} alt="Card image cap" />
      <CardBody className="border">
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{post}</CardSubtitle>
      </CardBody>
    </Card>
  </Col>
);

export const Team = () => (
  <div className="team-container" id="team">
    <div className="team-background" />
    <div className="container">
      <h4 className="team-title">MEET OUR AMAZING TEAM</h4>
      <p className="team-caption">
        Lorem ipsum dolor sit amet proin gravida nibh vel velit
      </p>
      <hr
        className="mb-5"
        style={{ backgroundColor: "#fff", width: "5%", opacity: "0.2" }}
      />
      <Row className=" justify-content-center">
        {teamMember.map((member, index) => (
          <TeamCart key={index} {...member} />
        ))}
      </Row>
      <div className="team-container_footer mt-md-5 ">
        <p>Become part of our dream team, let’s join us ! </p>
        <Btn text="we are hiring" className="m-auto" />
      </div>
    </div>
  </div>
);
