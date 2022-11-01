import React from "react";

const CreateGroupModal = ({ email, title, myModal }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    myModal.hide();
    /* try {
          const data = await clienteAxios.post("/users/verify", { email });
          myModal.hide();
          console.log(data);
        } catch (error) {
          console.log(error);
        } */
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
        <form>
          <div className="mb-3">
            <label htmlFor="group" className="col-form-label">
              Grupo
            </label>
            <select
              className="form-select"
              id="group"
              required
              name="name"
              // onChange={handleChange}
              // value={group.name}
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
            <label htmlFor="ciclo" className="col-form-label">
              Ciclo Escolar
            </label>
            <select
              className="form-select"
              id="ciclo"
              required
              name="cicle"
              // onChange={handleChange}
              // value={group.cicle}
            >
              <option disabled value="">
                Selecciona un ciclo escolar
              </option>
              <option value="2020-2021">2020-2021</option>
              <option value="2021-2022">2021-2022</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="grade" className="col-form-label">
              Grado
            </label>
            <select
              className="form-select"
              id="grade"
              required
              name="grade"
              // onChange={handleChange}
              // value={group.grade}
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
        </form>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-primary form-control my-2"
          type="submit"
          onClick={handleSubmit}
        >
          Agregar Grupo
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancelar
        </button>
        <button type="button" className="btn btn-main" onClick={handleSubmit}>
          Crear grupo
        </button>
      </div>
    </>
  );
};

export default CreateGroupModal;
