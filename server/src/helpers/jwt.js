const jwt = require("jsonwebtoken");

//genera un token con la data enviada
const generateToken = (payload, expires) => {
  return jwt.sign(
    {
      payload,
    },
    process.env.SECRET,
    { expiresIn: expires }
  );
};

//verifica que el token sea válido
const verifyToken = (token) => {
  try {
    const cifrado = jwt.verify(token, process.env.SECRET);
    return cifrado;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
