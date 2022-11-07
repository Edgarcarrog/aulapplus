import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { useSelector } from "react-redux";
import clienteAxios from "../../config/axios";
import Input from "../Input";

const AddStudentModal = ({ title, myModal }) => {
  const [disabled, setDisabled] = useState("disabled");
  const [groupId, setGroupId] = useState(null);

  const [dataForm, handleChange, resetDataForm] = useForm({
    studentName: "",
    firstLastname: "",
    secondLastname: "",
  });
  
  const currentGroup = useSelector((state) => state.teacher.currentGroup);

  useEffect(() => {
    if (
      dataForm.studentName &&
      dataForm.firstLastname &&
      dataForm.secondLastname
    ) {
      setDisabled("");
    } else setDisabled("disabled");
    if (currentGroup) {
      setGroupId([currentGroup._id]);
    }
  }, [dataForm, currentGroup]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await clienteAxios.post(`/students`, { ...dataForm, groupId });
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
            value={dataForm.studentName}
            handleChange={handleChange}
          />
          <Input
            id="firstLastname"
            label="Apellido paterno"
            htmlFor="firstLastname"
            type="text"
            required={true}
            value={dataForm.firstLastname}
            handleChange={handleChange}
          />
          <Input
            id="secondLastname"
            label="Apellido materno"
            htmlFor="secondLastname"
            type="text"
            required={true}
            value={dataForm.secondLastname}
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
          Agregar alumno
        </button>
      </div>
    </>
  );
};

export default AddStudentModal;
