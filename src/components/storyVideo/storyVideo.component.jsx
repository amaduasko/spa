import React, { useState } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import { Container, Modal, ModalBody } from "reactstrap";
import playIcon from "../../images/Play_Icon.png";
import "./storyVideo.style.scss";

const Text = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  letter-spacing: 0.8px;
  text-align: center;
  margin-top: 20px;
`;
const Button = styled.button`
  &:focus {
    outline: 0;
  }
`;

export const StoryVideo = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="storyvideo-container mb-5">
      <div className="storyvideo-background" />
      <div className=" container position-relative ">
        <Button
          className="bg-transparent border-0 d-block m-auto"
          onClick={toggle}
        >
          <img src={playIcon} alt="play icon" />
        </Button>
        <Text>watch our story</Text>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody className="p-0">
          <Container className="p-0">
            <Iframe
              url="https://www.youtube.com/embed/KvUgaHTNit4"
              width="100%"
              height="100%"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};
