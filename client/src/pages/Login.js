import Header from "../components/Header";
import Input from "../components/TextInput";

const Login = () => {
  return (
    <div className="main">
      <div className="container px-4">
        <Header />
        <div className="row justify-content-around m-0 principal">
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
            <div className="inline-block pb-3">
              <h3 className="inline-block">Crea una cuenta para iniciar</h3>
            </div>
            <div className="box">
              <form>
                <Input
                  id="name"
                  label="Nombre"
                  htmlFor="name"
                  autoFocus="true"
                  type="text"
                />
                <Input id="email" label="Email" htmlFor="email" type="email" />
                <Input
                  id="password"
                  label="Password"
                  htmlFor="password"
                  type="password"
                />
                <Input
                  id="confirmPassword"
                  label="Confirma el Password"
                  htmlFor="confirmPassword"
                  type="password"
                />
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-main form-control"
                    /* onClick={handleSubmit} */
                  >
                    Registrarse
                  </button>
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
