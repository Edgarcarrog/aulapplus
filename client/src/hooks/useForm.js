import { useState } from "react";

const useForm = (data) => {
  const [dataForm, setDataForm] = useState(data);

  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const resetDataForm = () => {
    setDataForm(data);
  };

  return [dataForm, handleChange, resetDataForm];
};

export default useForm;
