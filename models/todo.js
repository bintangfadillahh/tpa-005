const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
