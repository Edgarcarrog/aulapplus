const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { getTemplate, sendEmail } = require("../config/mail");
const { generateToken, verifyToken } = require("../helpers/jwt");
const jwt = require("jsonwebtoken");

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
      if (!correctPass) throw new Error("Usuario y/o password incorrectos");

      const userId = user.id;
      const token = generateToken(userId);
      return res.status(200).json({ msg: "Bienvenido", data: token });
    })
    .catch((error) => {
      console.log(error.message);
      return res.status(400).json({ msg: error.message });
    });
};

exports.createUser = (req, res) => {
  //revisar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //extraer email, name y password
  const { email, name, password } = req.body;
  const token = generateToken({ name, email }, '15m');
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

exports.verifyEmail = (req, res) => {
  const token = req.params.token;
  const tokenGotten = verifyToken(token);
  console.log("tokenGotten", tokenGotten);
  if (!tokenGotten.payload) {
    return res
      .status(400)
      .json({ msg: "Hubo un error. Envía un nuevo correo de verificación" });
  }

  try {
    //Revisa si el token ya expiró
    //const { mail } = tokenGotten.payload;
    /* return userPool
      .getUserByEmail(mail)
      .then((response) => {
        const [[user]] = response;
        //Revisa si el correo ha sido verificado anteriormente
        if (user.email_verified)
          throw new Error("El correo ya ha sido verificado anteriormente");

        return userPool.verifyEmail(mail);
      })
      .then(() => {
        return { status: 200, msg: "Correo verificado" };
      })
      .catch((error) => {
        return { status: 200, msg: error.message };
      }); */
  } catch (error) {
    return { status: 200, msg: error.message };
  }
};
