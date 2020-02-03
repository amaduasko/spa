import React from "react";
import styled from "styled-components";
const Button = styled.button`
  display: block;
  border: 1px solid #00e0d0;
  background: transparent;
  color: #00e0d0;
  font-family: "Roboto", sans-serif;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  &:hover {
    color: #fff;
    background-color: #00e0d0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 576px) {
    width: 50%;
  }
`;
export const Btn = ({ text, className }) => (
  <Button className={className}>{text}</Button>
);
