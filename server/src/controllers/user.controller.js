const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res) => {
  //revisar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //extraer email y password
  console.log(req.body);
  const { email, password } = req.body;

  return User.findOne({ email })
    .then((response) => {
      let user = response;
      console.log(user);
      if (response) throw new Error("Ya existe una cuenta con este email");
      user = new User(req.body);
      user.password = bcrypt.hashSync(password, 8);
      return user.save();
    })
    .then((response) => {
        console.log(response);
      return res.status(200).json({ msg: "Usuario Creado" });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });

  /* try {
    let user = User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Usuario ya registrado" });
    }
    user = new User(req.body);

    //hashear el password
    //const salt = await bcrypt.genSalt(10);
    user.password = bcrypt.hashSync(password, 8);

    user.save();

    //crear y firmar el JsonWebToken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: "7d",
      },
      (error, token) => {
        if (error) throw error;
        return res.status(200).json({ token, msg: "Usuario creado" });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send("Hubo un error");
  } */
};
