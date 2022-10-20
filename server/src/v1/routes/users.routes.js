const router = require("express").Router();
const { check } = require("express-validator");

const { authUser, createUser } = require("../../controllers/user.controller");

// api/users
router
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
    [
      check("email", "El email es obligatorio").notEmpty(),
      check("password", "El password debe tener mínimo 8 caracteres").isLength({
        min: 8,
      }),
    ],
    authUser
  );

//   .delete("/users/:userId", auth, deleteUser);

module.exports = router;
