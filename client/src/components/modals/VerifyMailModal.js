import clienteAxios from "../../config/axios";

const VerifyMailModal = ({ email, title, myModal }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await clienteAxios.post("/users/verify", { email });
      myModal.hide();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
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
              <span>
                Enviaremos un enlace para la activar tu cuenta al siguiente
                correo:
              </span>
              <br />
              <span>
                <strong>{email}</strong>
              </span>
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
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMailModal;
