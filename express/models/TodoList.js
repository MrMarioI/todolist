const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    nom: String,
    todos: [ObjectId(Todo)]
});

const TodoListModel = mongoose.model("TodoList", todolistSchema);

module.exports = TodoListModel;