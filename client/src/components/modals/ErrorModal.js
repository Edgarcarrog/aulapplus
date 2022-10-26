import { BiErrorAlt } from "react-icons/bi";

//modal que se mostrará cuando haya un error al hacer una petición a la api
const ErrorModal = ({ title }) => {
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
        <div className="modal__icon">
          <BiErrorAlt />
        </div>
      </div>
      <div className="modal-footer">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
