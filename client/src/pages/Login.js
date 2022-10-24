import clienteAxios from "../config/axios";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import useForm from "../hooks/useForm";
import ModalComponent from "../components/ModalComponent";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [dataForm, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [modalData, setModalData] = useState({
    title: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await clienteAxios.post("/users/auth", dataForm);
      console.log(data);
      event.target.reset();
      navigate("/home");
    } catch (error) {
      setModalData({ ...modalData, title: error.response.data.msg });
      console.log("El error es", error.response.data.msg);
      const myModal = new Modal("#exampleModal");
      myModal.show();
    }
  };

  const handleClick = (e) => {
    const myModal = new Modal("#exampleModal");
    myModal.show();
  };

  return (
    <div className="main">
      <button onClick={handleClick}>mi botón</button>
      <ModalComponent title={modalData.title} />
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
                <Input
                  className="btn-main"
                  type="submit"
                  value="Iniciar Sesión"
                />
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
