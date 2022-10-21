const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: "ejemplo@mail.com",
      to: email,
      subject,
      text: "Confirma tu correo para activar tu cuenta",
      html,
    });
  } catch (error) {
    console.log("Error al enviar el email", error);
  }
};

const getTemplate = (name, token) => {
  return `
    <head>
        <link rel="stylesheet" href="./style.css">
    </head>
    <div id="email__content">
        <h2>Hola ${name}</h2>
        <p>Da click en el siguiente enlace para confirmar tu cuenta de Aulapplus</p>
        <a href="http://localhost:4000/api/v1/users/verify/${token}" target=”_blank”>Confirmar cuenta</a>
    </div>
    `;
};

module.exports = {
  sendEmail,
  getTemplate,
};
