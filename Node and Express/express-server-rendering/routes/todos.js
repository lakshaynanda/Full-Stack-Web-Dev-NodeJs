const route = require('express').Router()

let todos = [
    { task: 'task 1' },
    { task: 'task 2' }
]

route.get('/', function(req, res) {
    res.render('todos', { todos })
})

route.post('/', function(req, res) {
    todos.push({
        task: req.body.newtodo
    })
    res.redirect('todos')
})
module.exports = route