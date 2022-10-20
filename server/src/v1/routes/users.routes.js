const router = require("express").Router();
const { check } = require("express-validator");

const { createUser } = require("../../controllers/user.controller");

// api/users
router.post(
  "/users",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe tener mínimo 8 caracteres").isLength({
      min: 8,
    }),
  ],
  createUser
);

//   .delete("/users/:userId", auth, deleteUser);

module.exports = router;
