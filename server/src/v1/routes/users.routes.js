const router = require("express").Router();
const { check } = require("express-validator");

const {
  authUser,
  createUser,
  verifyEmail,
  sendMailToken,
  updateUser,
} = require("../../controllers/user.controller");

// api/users
router
  //ruta para activar la cuenta del usuario desde su correo
  .get("/users/verify/:token", verifyEmail)

  .post(
    "/users",
    [
      check("name", "El nombre es obligatorio").notEmpty(),
      check("email", "Agrega un email válido").isEmail(),
      check("password", "El password debe tener mínimo 8 caracteres").isLength({
        min: 8,
      }),
    ],
    createUser
  )

  .post(
    "/users/auth",
    [check("email", "El email es obligatorio").notEmpty()],
    authUser
  )

  //ruta para reenviar un link por correo y activar la cuenta
  .post(
    "/users/verify",
    [check("email", "El email es obligatorio").notEmpty()],
    sendMailToken
  )

  .put("/users/:token", updateUser);

//   .delete("/users/:userId", auth, deleteUser);

module.exports = router;
