import clienteAxios from "../config/axios";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import useForm from "../hooks/useForm";
import ModalComponent from "../components/modals/ModalComponent";
import { Modal } from "bootstrap";
import { useState } from "react";
import ErrorModal from "../components/modals/ErrorModal";

const Signup = () => {
  const [dataForm, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [modalData, setModalData] = useState({
    title: "",
    children: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (dataForm.password.trim().length < 8)
        throw new Error("La contraseña debe contener mínimo 8 caracteres");
      if (dataForm.password.trim() !== dataForm.confirmPassword.trim())
        throw new Error("Las contraseñas deben coincidir");

      const data = await clienteAxios.post("/users", dataForm);
      console.log(data);
      event.target.reset();
    } catch (error) {
      console.log(error.message);
      setModalData({
        title: error.message,
        children: <ErrorModal />,
      });
      const myModal = new Modal("#exampleModal");
      myModal.show();
    }
  };

  return (
    <div className="main">
      <ModalComponent title={modalData.title}>
        {modalData.children}
      </ModalComponent>
      <div className="container main-container px-4">
        <div className="row d-flex align-content-around m-0 principal">
          <div className="col-12 col-xl-5 gradient p-0">
            <div className="ps-xl-5 pt-xl-5">
              <h1>Aulapplus.</h1>
            </div>
          </div>
          <div className="col-12 col-xl-5 p-0 login-form d-flex flex-column align-items-center">
            <div className="inline-block mb-3 mt-2 mt-md-0">
              <h3 className="inline-block">Crea una cuenta para iniciar</h3>
            </div>
            <div className="box">
              <form onSubmit={handleSubmit}>
                <Input
                  id="name"
                  label="Nombre"
                  htmlFor="name"
                  autoFocus={true}
                  type="text"
                  required={true}
                  handleChange={handleChange}
                />
                <Input
                  id="email"
                  label="Email"
                  htmlFor="email"
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
                  id="confirmPassword"
                  label="Confirma el Password"
                  htmlFor="confirmPassword"
                  type="password"
                  required={true}
                  handleChange={handleChange}
                />
                <Input
                  className="btn-main"
                  type="submit"
                  value="Crear cuenta"
                />
                <div className="mt-3 text-center">
                  <span className="mx-2">¿Ya tienes cuenta?</span>
                  <NavLink to="/">
                    <Button className="btn-secondary">Inicia sesión</Button>
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

export default Signup;
