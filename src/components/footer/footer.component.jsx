import React from "react";
import Scrollchor from "react-scrollchor";
import logo from "../../images/Logo.png";
import geoIcon from "../../images/big104.png";
import phoneIcon from "../../images/phone351.png";
import sendIcon from "../../images/paper122.png";
import faceBookIcon from "../../images/facebook.png";
import dribbleIcon from "../../images/dribbble.png";
import gplusIcon from "../../images/gplus.png";
import youtubeIcon from "../../images/youtube.png";
import instagramIcon from "../../images/instagram.png";
import twitterIcon from "../../images/twitter.png";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap";

import "./footer.style.scss";

export const AppFooter = () => (
  <div id="contact" className="container mobile-footer-container">
    <Row className="mr-0 ml-0">
      <Col>
        <Scrollchor to="/">
          <img src={logo} alt="logo" />
        </Scrollchor>
        <p className="footer-text  mt-4">
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris
          vitae erat in elit
        </p>
      </Col>
      <Col>
        <h5 className="footer-title">OUR STUDIO</h5>
        <div className="d-flex mt-5">
          <a href="/" className="col-2 pl-0 pr-0">
            <img className="footer-center_icon" src={geoIcon} alt="geo" />
          </a>
          <p className="footer-text float-right ">
            Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
            Jakarta Barat 11480 - Indonesia
          </p>
        </div>
        <div className="d-flex mt-2">
          <a href="/" className="col-2 pl-0 pr-0">
            <img className="footer-center_icon" src={phoneIcon} alt="phone" />
          </a>
          <a href="/" className="footer-text float-right ">
            (+62) 21-2224 3333
          </a>
        </div>
      </Col>
      <Col className="mobile-social-container">
        <h5 className="footer-title">STAY IN TOUCH</h5>
        <div className="mt-5 mobile-footer-input-container">
          <InputGroup>
            <Input
              className="footer-input rounded-0"
              placeholder="Subscribe our newsletter"
            />
            <InputGroupAddon className="ml-2" addonType="append">
              <Button className="rounded-0 bgAddon pb-0 pt-0">
                <img src={sendIcon} alt="send icon" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="mt-4 d-flex">
          <a className="social-icon" href="/">
            <img src={faceBookIcon} alt="social icon" />
          </a>
          <a className="social-icon" href="/">
            <img src={twitterIcon} alt="social icon" />
          </a>
          <a className="social-icon" href="/">
            <img src={dribbleIcon} alt="social icon" />
          </a>
          <a className="social-icon" href="/">
            <img src={instagramIcon} alt="social icon" />
          </a>
          <a className="social-icon" href="/">
            <img src={gplusIcon} alt="social icon" />
          </a>
          <a className="social-icon" href="/">
            <img src={youtubeIcon} alt="social icon" />
          </a>
        </div>
      </Col>
    </Row>
    <Row className="mr-0 ml-0 mt-md-3 ">
      <Col md="8" xs="12">
        <Row className="mr-0 ml-0">
          <Col md="2" xs="3">
            <a className="footer-bottom_text" href="/">
              help
            </a>
          </Col>
          <Col md="5" xs="5">
            <a className="footer-bottom_text" href="/">
              tearm & condition
            </a>
          </Col>
          <Col md="2" xs="3">
            <a className="footer-bottom_text" href="/">
              privacy
            </a>
          </Col>
        </Row>
      </Col>
      <Col className="pr-0 pl-0">
        <p className="footer-bottom_text mobile-copyright">
          copyright © 2015 - Tajem Creative
        </p>
      </Col>
    </Row>
  </div>
);
