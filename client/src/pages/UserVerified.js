import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import clienteAxios from "../config/axios";

const UserVerified = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setLoading(true);
    clienteAxios
      .get(`/users/verify/${token}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMsg(error.response.data);
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <Spinner /> : <h3>{errorMsg}</h3>}</div>;
};

export default UserVerified;
