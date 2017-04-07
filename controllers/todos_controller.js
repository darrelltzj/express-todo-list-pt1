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

router.post('/create', function (req, res) {
  // console.log(req.body)
  Todo.create(req.body, function (err, todo) {
    if (err) console.error(err)
    // console.log(todo)
    todo.save()
    res.redirect('/todos')
  })
})

router.get('/', function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) console.error(err)
    // console.log(todos)
    res.render('todo', {todos: todos})
  })
})

router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) console.error(err)
    // console.log(todo)
    res.render('todo', {todos: [todo]})
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
