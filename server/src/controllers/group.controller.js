const User = require("../models/User");
const Group = require("../models/Group");
const { verifyToken } = require("../helpers/jwt");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

exports.createGroup = (req, res) => {
  //revisar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { group, grade, cicle } = req.body;
  const { token } = req.params;
  const tokenGotten = verifyToken(token);
  const teacherId = tokenGotten.payload;

  return Group.findOne({
    grade,
    group,
    cicle,
    teacher: teacherId,
  })
    .then((groupFound) => {
      if (groupFound) throw new Error("Ya existe el grupo");
      let newGroup = new Group({ grade, group, cicle });
      newGroup.teacher = teacherId;
      return newGroup.save();
    })
    .then((newGroup) => {
      return res.status(200).json(newGroup);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });
};

exports.getOneGroup = (req, res) => {
  //extraer id del profesor
  const { id } = req.params;
  Group.findById(id)
    .select(["group", "grade", "cicle", "subjects"])
    .then((group) => {
      if (!group) throw new Error("No se encontró el grupo");
      return res.status(200).json(group);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });
};

exports.getGroups = async (req, res) => {
  //extraer id del profesor
  const { token } = req.params;
  const tokenGotten = verifyToken(token);
  const teacherId = tokenGotten.payload;

  if (!teacherId) throw new Error("Hubo un error");

  Group.find({ teacher: teacherId })
    .select(["group", "grade", "cicle"])
    .sort({
      grade: 1,
      name: 1,
      cicle: 1,
    })
    .then((groups) => {
      return res.status(200).json(groups);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });
};

exports.updateGroup = (req, res) => {
  const groupId = req.params.id;

  Group.findById(groupId)
    .then((group) => {
      if (!group) throw new Error("No existe el grupo");
      return Group.findByIdAndUpdate(groupId, req.body);
    })
    .then((group) => {
      return res.status(200).json(group);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });
};

exports.deleteGroup = async (req, res) => {
  /* try {
    const groupId = req.params.id;
    const teacherId = req.user.id;
    var userID = mongoose.mongo.ObjectID(groupId);
    let group = await Group.findById(groupId);

    if (!group) {
      return res.status(400).json({ msg: "El grupo no existe" });
    }
    if (group.teacher.toString() !== req.user.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    group = await Group.findByIdAndDelete(groupId);

    //elimina el grupo indicado del array de grupos del usuario
    await User.findByIdAndUpdate(teacherId, {
      $pullAll: { groups: [userID] },
    });
    return res.status(200).json({ msg: "Grupo eliminado", group });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Hubo un error");
  } */
  return res.status(200).json(group);
};
