import React from "react";
import { AppFooter } from "../../components/footer/footer.component";
import "./Footer.style.scss";

export default function Footer() {
  return (
    <div id="footer" className="footer-container mt-5">
      <div className="footer-background" />
      <div className=" container position-relative ">
        <AppFooter />
      </div>
    </div>
  );
}
