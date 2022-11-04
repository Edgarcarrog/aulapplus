import clienteAxios from "../config/axios";
import { NavLink, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useState } from "react";
import VerifyMailModal from "../components/modals/VerifyMailModal";
import ModalComponent from "../components/modals/ModalComponent";
import ErrorModal from "../components/modals/ErrorModal";
import Input from "../components/Input";
import Button from "../components/Button";
import { Modal } from "bootstrap";

const Login = () => {
  const navigate = useNavigate();
  
  const [dataForm, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [modalData, setModalData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await clienteAxios.post("/users/auth", dataForm);
      localStorage.setItem("user", response.data.data);
      event.target.reset();
      navigate("/home");
    } catch (error) {
      const myModal = new Modal("#myModal");
      //-------selecciona el modal a mostrar dependiendo del error
      switch (error.response.data.msg) {
        case "El correo no ha sido verificado.":
          setModalData(
            <VerifyMailModal
              title={error.response.data.msg}
              email={dataForm.email}
              myModal={myModal}
            />
          );
          break;
        case "Usuario o password incorrecto.":
          setModalData(<ErrorModal title={error.response.data.msg} />);
          break;
        default:
          setModalData(
            <ErrorModal title="Hubo un error. Inténtalo nuevamente." />
          );
      }
      myModal.show();
    }
  };

  return (
    <div className="main">
      <ModalComponent>{modalData}</ModalComponent>
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
