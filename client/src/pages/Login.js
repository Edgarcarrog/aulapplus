import clienteAxios from "../config/axios";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import useForm from "../hooks/useForm";
import { useEffect, useState } from "react";
import VerifyMailModal from "../components/modals/VerifyMailModal";
import ErrorModal from "../components/modals/ErrorModal";

const Login = () => {
  const navigate = useNavigate();
  const [dataForm, handleChange] = useForm({
    email: "",
    password: "",
  });

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (modal) {
      const myModal = new Modal("#myModal");
      myModal.show();
    }
  }, [modal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await clienteAxios.post("/users/auth", dataForm);
      console.log(data);
      event.target.reset();
      navigate("/home");
    } catch (error) {
      console.log(error.response.data.msg);
      switch (error.response.data.msg) {
        case "El correo no ha sido verificado.":
          setModal(
            <VerifyMailModal
              title={error.response.data.msg}
              email={dataForm.email}
              // myModal={myModal}
            />
          );
          break;
        case "Usuario o password incorrecto.":
          setModal(<ErrorModal title={error.response.data.msg} />);
          break;
        default:
          setModal(<ErrorModal title="Hubo un error. Inténtalo nuevamente." />);
      }
    }
  };

  return (
    <div className="main">
      {modal ? modal : null}
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
