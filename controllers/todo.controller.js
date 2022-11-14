const { json } = require("express");
const Todo = require("../models/todo");

module.exports = {
  getTodo: async (req, res) => {
    const todos = await Todo.find({}, "-__v");

    res.json({
      message: "success get data todo",
      data: todos,
    });
  },

  addTodo: (req, res) => {
    const data = req.body;
    const todo = new Todo(data);
    todo.save();

    res.json({
      message: "New todo has been created",
    });
  },

  deleteTodo: async (req, res) => {
    await Todo.findOneAndDelete({ title: req.params.title });
    res.json({
      message: "Successfully deleted",
    });
  },

  deleteAllTodo: async (req, res) => {
    await Todo.deleteMany({});
    res.json({
      message: "Successfully deleted all todos",
    });
  },

  updateTodo: async (req, res) => {
    const data = req.body;
    await Todo.updateOne({ title: req.params.title }, data);
    res.json({
      message: "Data updated",
    });
  },
};
