import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="row m-0 py-3">
      <div className="col-12 d-flex justify-content-end m-0 p-0">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
