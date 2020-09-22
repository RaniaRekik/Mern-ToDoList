const express = require('express')
const todoController = require('../controllers/todoController')
const routes = express.Router();

routes.post('/Addtodo', todoController.createTodo)
routes.get('/', todoController.getAllTodo)
routes.delete('/todo/:todotId', todoController.delete)
routes.put('/completed/:id', todoController.completed)

module.exports = routes;