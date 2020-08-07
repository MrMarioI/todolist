const express = require('express');
const router = express.Router();
const TodoModel = require("./../models/Todo");

/* GET:  todo. */
router.get("/", async (req, res, next) => {
  try {
    const todos = await TodoModel.find().sort({ _id: -1 }); 
    res.json(todos); 
  } catch (err) {
    next(err);
  }
});

/* Get: by id*/ 
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// POST :  (créer un nouveau todo)
router.post("/", async (req, res, next) => {
  try {
    const newTodo = await TodoModel.create(req.body); 
    res.json(newTodo);
  } catch (err) {
    next(err);
  }
});

// DELETE : /api/todos/un-id-de-mongodb
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id); 
    res.json(deletedTodo);
  } catch (err) {
    next(err);
  }
});

// PATCH : /api/todos/un-id-mongo 
router.patch("/:id", async (req, res, next) => {
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
