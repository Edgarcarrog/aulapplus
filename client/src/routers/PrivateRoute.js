import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ children }) => {
  let storage = localStorage.getItem("user");
  console.log(storage);
  //storage = JSON.parse(storage);
  return storage ? (
    <>
      <div className="main">
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
