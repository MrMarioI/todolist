const express = require('express');
const router = express.Router();
const TodoModel = require("./../models/Todo");
const TodoListModel = require("../models/Todo");

/* GET:  todolist. */
router.get("/", async (req, res, next) => {
  try {
    const todolists = await TodoListModel.find()
    .populate(Todo);
    res.json(todolists);
  } catch (err) {
    next(err);
  }
});

/* Get: by id*/
router.get("/:id", async (req, res, next) => {
  try {
    const todolist = await TodoListModel.findById(req.params.id);
    res.json(todolist);
  } catch (err) {
    next(err);
  }
});

// POST :  (créer un nouveau todo)
router.post("/", async (req, res, next) => {
  try {
    const newTodolist = await TodoListModel.create(req.body);
    res.json(newTodolist);
  } catch (err) {
    next(err);
  }
});

// DELETE : /api/todos/un-id-de-mongodb
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTodolist = await TodoListModel.findByIdAndDelete(req.params.id);
    res.json(deletedTodolist);
  } catch (err) {
    next(err);
  }
});

// PATCH : /api/todos/un-id-mongo 
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedTodolist = await TodoListModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      {
        new: true
      } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(updatedTodolist);
  } catch (err) {
    next(err);
  }
});



/* Get: by id*/ 
router.get("/todo/:id", async (req, res, next) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// POST :  (créer un nouveau todo)
router.post("/todo", async (req, res, next) => {
  try {
    const newTodo = await TodoModel.create(req.body); 
    res.json(newTodo);
  } catch (err) {
    next(err);
  }
});

// DELETE : /api/todos/un-id-de-mongodb
router.delete("/todo/:id", async (req, res, next) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id); 
    res.json(deletedTodo);
  } catch (err) {
    next(err);
  }
});

// PATCH : /api/todos/un-id-mongo 
router.patch("/todo/:id", async (req, res, next) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(updatedTodo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;