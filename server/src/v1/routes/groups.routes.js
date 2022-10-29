
const router = require("express").Router();
const { check } = require("express-validator");

const {
  createGroup,
  getOneGroup,
  getGroups,
  updateGroup,
  deleteGroup,
} = require("../controllers/groupController");

// api/group
router.post(
  "/",
  auth,
  [
    check("name", "Agrega el nombre del grupo").notEmpty(),
    check("grade", "Agrega el grado").notEmpty(),
    check("cicle", "Agrega el ciclo").notEmpty(),
  ],
  createGroup
);

router.get("/:id", auth, getOneGroup);

router.get("/", auth, getGroups);

router.put(
  "/:id",
  auth,
  [
    check("name", "Agrega el nombre del grupo").notEmpty(),
    check("grade", "Agrega el grado").notEmpty(),
    check("cicle", "Agrega el ciclo").notEmpty(),
  ],
  updateGroup
);

router.delete("/:id", auth, deleteGroup);

module.exports = router;
