const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String,
    priority: Number,
    is_done: Boolean,
    date_created: Date
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;