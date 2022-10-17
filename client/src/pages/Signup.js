import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="main">
      <div>
        <nav>sign up</nav>
        <p className="m-0 mt-3">
          ¿Ya tienes una cuenta?{" "}
          <NavLink className="link" to={"/"}>
            Iniciar sesión
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
