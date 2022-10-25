import { BiErrorAlt } from "react-icons/bi";

const ErrorModal = ({ email }) => {
  return (
    <>
      <div className="modal-body">
        <div className="modal__icon">
          <BiErrorAlt />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cerrar
        </button>
      </div>
    </>
  );
};

export default ErrorModal;
