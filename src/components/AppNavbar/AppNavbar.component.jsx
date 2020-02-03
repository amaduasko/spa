import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../images/Logo.png";
import Scrollchor from "react-scrollchor";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import "./AppNavbar.style.scss";

const Logo = styled.img``;
export const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNvaLinks] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
    props.setToolbarState(!props.isToolbarOpen);
  };
  const toggleActive = event => {
    navLinks.forEach(item => item.classList.remove("active"));
    event.target.classList.add("active");
    if (isOpen) setIsOpen(!isOpen);
    if (props.isToolbarOpen)  props.setToolbarState(!props.isToolbarOpen);
  };
  useEffect(() => {
    setNvaLinks(document.querySelectorAll(".nav-link"));
  }, []);
  return (
    <div>
      <Container>
        <Navbar dark expand="md">
          <Scrollchor className='navbar-brand' to="/">
            <Logo src={logo} alt="logo" />
          </Scrollchor>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="/" className="nav-link text-uppercase active ">
                  Home
                </Scrollchor>
              </NavItem>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="about" className="nav-link text-uppercase ">
                  About
                </Scrollchor>
              </NavItem>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="expertise" className="nav-link text-uppercase ">
                  Expertise
                </Scrollchor>
              </NavItem>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="team" className="nav-link text-uppercase ">
                  Team
                </Scrollchor>
              </NavItem>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="works" className="nav-link text-uppercase ">
                  Works
                </Scrollchor>
              </NavItem>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="review" className="nav-link text-uppercase ">
                  People say
                </Scrollchor>
              </NavItem>
              <NavItem onClick={toggleActive}>
                <Scrollchor to="contact" className="nav-link text-uppercase ">
                  Contact
                </Scrollchor>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
