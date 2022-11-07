const router = require("express").Router();
const { check } = require("express-validator");

const {
  createStudent,
  /*getGroups,
  getOneGroup,
  updateGroup,
  deleteGroup, */
} = require("../../controllers/student.controller");

// api/group
router.post(
  "/students",
  [
    check("studentName", "Agrega el nombre del alumno").notEmpty(),
    check("firstLastname", "Agrega el apellido paterno").notEmpty(),
    check("secondLastname", "Agrega el apellido materno").notEmpty(),
  ],
  createStudent
);
/*
  .get("/groups/:token", getGroups)

  .get("/groups/oneGroup/:id", getOneGroup)

  .put("/groups/addSubjects/:id", updateGroup);


router.put(
  "/:id",
  [
    check("name", "Agrega el nombre del grupo").notEmpty(),
    check("grade", "Agrega el grado").notEmpty(),
    check("cicle", "Agrega el ciclo").notEmpty(),
  ],
  updateGroup
);

router.delete("/:id", deleteGroup); */

module.exports = router;
