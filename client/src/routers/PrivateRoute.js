import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let storage = localStorage.getItem("user");
  console.log(storage);
  //storage = JSON.parse(storage);
  return storage ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
