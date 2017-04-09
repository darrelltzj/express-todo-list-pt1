const Todo = require('../models/todo')

// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })

const express = require('express')
const router = express.Router()

router.get('/create', function (req, res) {
  res.render('create')
})

router.post('/', function (req, res) {
  Todo.create(req.body, function (err, todo) {
    if (err) console.error(err)
    todo.save()
    res.redirect('/todos')
  })
})

router.get('/', function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) console.error(err)
    res.render('todo', {todos: todos})
  })
})

router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) console.error(err)
    res.render('id', {todo: todo})
  })
})

router.get('/:id/edit', function (req, res) {
  Todo.findById({ _id: req.params.id }, function (err, todo) {
    if (err) console.error(err)
    res.render('edit', {todo: todo})
  })
})

router.put('/:id', function (req, res) {
  Todo.findOneAndUpdate({
    id: req.params._id
  }, {
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  }, function (err, todo) {
    if (err) console.error(err)
    console.log(todo)
    res.send({message: 'success'})
    // res.redirect('/todos/' + todo.id)
    // res.redirect('/todos/:id')
  })
})

// function create (params) {
//   Todo.create(params, function (err, todo) {
//     if (err) {
//       console.log(err)
//       return
//     }
//     console.log(todo)
//   })
// }
//
// function list () {
//   Todo.find({}, function (err, todos) {
//     if (err) {
//       console.log(err)
//       return err
//     }
//     console.log(todos)
//     return todos
//   })
// }
//
// function show (id) {
//   Todo.findById(id, function (err, todo) {
//     if (err) return console.log(err)
//     console.log(todo)
//   })
// }
//
// function update (id, params) {
//   Todo.findOneAndUpdate({ _id: id }, params, function (err, todo) {
//     if (err) console.log(err)
//     console.log(todo)
//   })
// }
//
// function destroy (id) {
//   Todo.findOneAndRemove({ _id: id }, function (err) {
//     if (err) console.log(err)
//     console.log('User deleted!')
//   })
// }

module.exports = router

// module.exports = {
//   create,
//   list,
//   show,
//   update,
//   destroy
// }
