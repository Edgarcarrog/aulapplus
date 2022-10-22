import { useState } from "react";

const useForm = (data) => {
  const [dataForm, setDataForm] = useState(data);

  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  return [dataForm, handleChange];
};

export default useForm;
