import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import clienteAxios from "../../config/axios";
import Input from "../Input";

const AddStudentModal = ({ title, myModal }) => {
  const [disabled, setDisabled] = useState("disabled");

  const [dataForm, handleChange, resetDataForm] = useForm({
    studentName: "",
    firstLastName: "",
    secondLastName: "",
  });

  useEffect(() => {
    if (
      dataForm.studentName &&
      dataForm.firstLastName &&
      dataForm.secondLastName
    ) {
      setDisabled("");
    } else setDisabled("disabled");
  }, [dataForm]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = localStorage.getItem("user");
      await clienteAxios.post(`/groups/${user}`, dataForm);
      resetDataForm();
      myModal.hide();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="myModalLabel">
          {title}
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <Input
            id="studentName"
            label="Nombre(s)"
            htmlFor="studentName"
            autoFocus={true}
            type="text"
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="firstLastName"
            label="Apellido paterno"
            htmlFor="firstLastName"
            autoFocus={true}
            type="text"
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="secondLastName"
            label="Apellido materno"
            htmlFor="secondLastName"
            autoFocus={true}
            type="text"
            required={true}
            handleChange={handleChange}
          />
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-main"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Crear grupo
        </button>
      </div>
    </>
  );
};

export default AddStudentModal;
