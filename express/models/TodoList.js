const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    nom: String,
    todos:[{
       type: Shema.Types.ObjectId,
       ref:"todos"
    }]

});

const TodoListModel = mongoose.model("TodoList", todolistSchema);

module.exports = TodoListModel;