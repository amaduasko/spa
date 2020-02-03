import React, { useState } from "react";
import { AppNavbar } from "../../components/AppNavbar/AppNavbar.component";
import { Head } from "../../components/head/head.component";
import "./Header.style.scss";

export default function Header() {
  const [isToolbarOpen, setToolbarState] = useState(false);
  return (
    <div id="/" className="Header">
      <div className="header-background" />
      <div className="pb-2 header-container">
        <AppNavbar
          isToolbarOpen={isToolbarOpen}
          setToolbarState={setToolbarState}
        />
        <Head isToolbarOpen={isToolbarOpen} />
      </div>
    </div>
  );
}
