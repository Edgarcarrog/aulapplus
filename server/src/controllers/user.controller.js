const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { getTemplate, sendEmail } = require("../config/mail");
const { generateToken, verifyToken } = require("../helpers/jwt");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res) => {
  //revisar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //extraer email, name y password
  const { email, name, password } = req.body;
  const token = generateToken({ name, email });
  const template = getTemplate(name, token);

  return User.findOne({ email })
    .then((user) => {
      if (user) throw new Error("Ya existe una cuenta con este email");
      user = new User(req.body);
      user.password = bcrypt.hashSync(password, 8);
      return user.save();
    })
    .then((user) => {
      sendEmail(email, "Confirma tu correo", template).then(() => {
        console.log("Correo de verificación enviado");
      });
      return res.status(200).json({ msg: "Usuario Creado", user });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });
};

exports.authUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  return User.findOne({ email })
    .then((user) => {
      //console.log(user);
      /* if (user && !user.verified)
        throw new Error("El correo no ha sido verificado"); */

      const correctPass =
        user === null ? false : bcrypt.compareSync(password, user.password);
      if (!correctPass) throw new Error("Usuario o password incorrecto");

      const userId = user.id;
      const token = generateToken(userId);
      return res.status(200).json({ msg: "Bienvenido", data: token });
    })
    .catch((error) => {
      console.log(error.message);
      return res.status(400).json({ msg: error.message });
    });
};
