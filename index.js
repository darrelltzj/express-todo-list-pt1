const mongoose = require('mongoose')
const todosController = require('./controllers/todos_controller')

mongoose.connect('mongodb://localhost/todo-list')
mongoose.Promise = global.Promise

// TODO. include express and body-parser, plugin in the todos controller and start listening
var express = require('express')
var app = express()
var port = 3000

// Layout structure settings
var ejsLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Post request handler
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/todos', todosController)

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
