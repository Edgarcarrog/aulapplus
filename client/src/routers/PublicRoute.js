import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ children }) => {
  let storage = localStorage.getItem("user");
  console.log(storage);
  //storage = JSON.parse(storage);
  return storage ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
