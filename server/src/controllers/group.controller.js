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
  console.log("tokenGotten", tokenGotten);
  const teacherId = tokenGotten.payload;

  return Group.findOne({
    grade,
    group,
    cicle,
    teacher: teacherId,
  })
    .then((newGroup) => {
      if (newGroup) throw new Error("Ya existe el grupo");
      let group = new Group(req.body);
      group.teacher = teacherId;
      return group.save();
    })
    .then((newGroup) => {
      return res.status(200).json(newGroup);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    });

  User.findByIdAndUpdate(teacherId, { $push: { groups: group._id } });
  return res.status(200).json(group);
};

exports.getOneGroup = async (req, res) => {
  //extraer id del profesor
  /* const Id = req.params.id;
  try {
    const group = await Group.findById(Id);
    return res.status(200).json(group);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Hubo un error");
  } */
  return res.status(200).json(group);
};

exports.getGroups = async (req, res) => {
  //extraer id del profesor
  /*const teacherId = req.user.id;
   try {
    const groups = await Group.find({ teacher: teacherId }).sort({
      grade: 1,
      name: 1,
      cicle: 1,
    });
    return res.status(200).json(groups);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Hubo un error");
  } */
  return res.status(200).json(group);
};

exports.updateGroup = async (req, res) => {
  //revisar si hay errores
  /* const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //extraer email y password
  const { name, grade, cicle } = req.body;
  const groupId = req.params.id;

  try {
    let group = await Group.findById(groupId);

    if (!group) {
      return res.status(400).json({ msg: "El grupo no existe" });
    }
    if (group.teacher.toString() !== req.user.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    group = await Group.findByIdAndUpdate(groupId, req.body, { new: true });

    return res.status(200).json(group);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Hubo un error");
  } */
  return res.status(200).json(group);
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
