const router = require("express").Router();
const { check } = require("express-validator");

const {
  createGroup,
  getGroups,
  getOneGroup,
  /* 
  updateGroup,
  deleteGroup, */
} = require("../../controllers/group.controller");

// api/group
router
  .post(
    "/groups/:token",
    [
      check("group", "Agrega el nombre del grupo").notEmpty(),
      check("grade", "Agrega el grado").notEmpty(),
      check("cicle", "Agrega el ciclo").notEmpty(),
    ],
    createGroup
  )

  .get("/groups/:token", getGroups)

  .get("/groups/oneGroup/:id", getOneGroup);
/*

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
