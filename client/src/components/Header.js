import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="row m-0 py-3">
      <div className="col-11 d-flex justify-content-end m-0 p-0">
        <div>
          <span className="mx-2">¿Ya tienes una cuenta?</span>
          <NavLink className="link" to={"/signup"}>
            Inicia Sesión
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
