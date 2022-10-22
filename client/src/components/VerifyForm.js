import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import clienteAxios from "../config/axios";
import Input from "./Input";
import useForm from "../hooks/useForm";

const VerifyForm = () => {
  const [dataForm, handleChange] = useForm({
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await clienteAxios.post("/users/auth", dataForm);
      console.log(data);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-12 col-xl-5 p-0 login-form d-flex flex-column align-items-center">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email"
            htmlFor="email"
            autoFocus={true}
            type="email"
            required={true}
            handleChange={handleChange}
          />
          <Input className="btn-main" type="submit" value="Valida tu email" />
          <div className="mt-1 text-center">
            <NavLink to="/">Inicia Sesión</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
