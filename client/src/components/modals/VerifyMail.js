import clienteAxios from "../../config/axios";

const VerifyMail = ({ email }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await clienteAxios.post("/users/verify", email);
      console.log(data);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <span>
            Enviaremos un enlace para la activar tu cuenta al siguiente correo:
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
        <button type="button" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </>
  );
};

export default VerifyMail;
