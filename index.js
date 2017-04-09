const mongoose = require('mongoose')
const todosController = require('./controllers/todos_controller')

mongoose.connect('mongodb://localhost/todo-list')
mongoose.Promise = global.Promise

// TODO. include express and body-parser, plugin in the todos controller and start listening
const express = require('express')
const app = express()

// Layout structure settings
const ejsLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public'))

// Post request handler
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use('/todos', todosController)

app.listen(3000)
