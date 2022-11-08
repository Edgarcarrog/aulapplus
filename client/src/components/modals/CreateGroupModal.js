import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import clienteAxios from "../../config/axios";
import ToastComponent from "../ToastComponent";
import { Toast } from "bootstrap";
import { BiErrorCircle } from "react-icons/bi";

const CreateGroupModal = ({ title, myModal }) => {
  const [disabled, setDisabled] = useState("disabled");
  const [myToast, setMyToast] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  const [dataForm, handleChange, resetDataForm] = useForm({
    grade: "",
    group: "",
    cicle: "",
  });

  useEffect(() => {
    if (dataForm.grade && dataForm.group && dataForm.cicle) {
      setDisabled("");
    }
    setMyToast(new Toast("#liveToast"));
  }, [dataForm]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = localStorage.getItem("user");
      await clienteAxios.post(`/groups/${user}`, dataForm);
      resetDataForm();
      myModal.hide();
    } catch (error) {
      setToastMsg(error.response.data.msg);
      console.log(error.response.data.msg);
      // myToast.delay(2000);
      myToast.show();
    }
  };

  return (
    <>
      <ToastComponent msg={toastMsg}>
        <>
          <div className="toast-body__icon">
            <BiErrorCircle />
          </div>
          <div className="toast-body__message">{toastMsg}</div>
        </>
      </ToastComponent>
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
        <form>
          <div className="mb-3">
            <label htmlFor="grade" className="col-form-label">
              Grado
            </label>
            <select
              className="form-select"
              id="grade"
              required
              name="grade"
              onChange={handleChange}
              value={dataForm.grade}
            >
              <option disabled value="">
                Selecciona un grado
              </option>
              <option value="1">1o</option>
              <option value="2">2o</option>
              <option value="3">3o</option>
              <option value="4">4o</option>
              <option value="5">5o</option>
              <option value="6">6o</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="group" className="col-form-label">
              Grupo
            </label>
            <select
              className="form-select"
              id="group"
              required
              name="group"
              onChange={handleChange}
              value={dataForm.group}
            >
              <option disabled value="">
                Selecciona un grupo
              </option>
              <option value="A">"A"</option>
              <option value="B">"B"</option>
              <option value="C">"C"</option>
              <option value="D">"D"</option>
              <option value="E">"E"</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="cicle" className="col-form-label">
              Ciclo Escolar
            </label>
            <select
              className="form-select"
              id="cicle"
              required
              name="cicle"
              onChange={handleChange}
              value={dataForm.cicle}
            >
              <option disabled value="">
                Selecciona un ciclo escolar
              </option>
              <option value="2022-2023">2022-2023</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2025-2026">2025-2026</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
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

export default CreateGroupModal;
