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
        <span>
          Enviaremos un enlace para la activar tu cuenta al siguiente correo:
        </span>
        <br />
        <span>
          <strong>{email}</strong>
        </span>
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
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </>
  );
};

export default VerifyMailModal;
