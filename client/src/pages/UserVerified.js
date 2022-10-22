import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import VerifyForm from "../components/VerifyForm";
import clienteAxios from "../config/axios";

const UserVerified = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    clienteAxios
      .get(`/users/verify/${token}`)
      .then((response) => {
        navigate("/home");
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMsg(error.response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <div className="container main-container px-4">
        <div className="row d-flex align-content-around m-0 principal">
          {loading ? <Spinner /> : <VerifyForm />}
        </div>
      </div>
    </div>
  );
};

export default UserVerified;
