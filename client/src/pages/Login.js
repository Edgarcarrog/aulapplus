import clienteAxios from "../config/axios";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

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
    <div className="main">
      <div className="container main-container px-4">
        <div className="row d-flex align-content-around m-0 principal">
          <div className="col-12 col-xl-5 gradient p-0">
            <div className="ps-xl-5 pt-xl-5 fade-in-left">
              <h1>Aulapplus.</h1>
              <p>
                Tu ayudante escolar. Crea, organiza y modifica tus evaluaciones
                de manera rápida y sencilla.
              </p>
            </div>
          </div>
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
                <Input
                  id="password"
                  label="Password"
                  htmlFor="password"
                  type="password"
                  required={true}
                  handleChange={handleChange}
                />
                <div className="mt-3">
                  <Button className="btn-main">Iniciar Sesión</Button>
                </div>
                <div className="mt-1 text-center">
                  <NavLink to="signup">¿Olvidaste tu contraseña?</NavLink>
                </div>
                <div className="mt-3 text-center">
                  <span className="mx-2">¿No tienes cuenta?</span>
                  <NavLink to="signup">
                    <Button className="btn-secondary">Regístrate</Button>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
