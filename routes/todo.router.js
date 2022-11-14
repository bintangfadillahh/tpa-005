const express = require("express");
const router = express.Router();

const {
  getTodo,
  addTodo,
  deleteTodo,
  deleteAllTodo,
  updateTodo,
} = require("../controllers/todo.controller");

router.get("/", getTodo);
router.post("/", addTodo);
router.delete("/:title", deleteTodo);
router.delete("/", deleteAllTodo);
router.put("/:title", updateTodo);

module.exports = router;
