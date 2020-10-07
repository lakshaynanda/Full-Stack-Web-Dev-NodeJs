const express = require('express')

const app = express()

function m1(req, res, next) {
    console.log('Running middleware 1')
    next()
}


function m2(req, res, next) {
    console.log('Running middleware 2')
    next()
}

function m3(req, res, next) {
    console.log('Running middleware 3')
    next()
}

function m4(req, res, next) {
    console.log('Running middleware 4')
    next()
}

function m5(req, res, next) {
    console.log('Running middleware 5')
    next()
}

app.get('/hello', m2, m3, (req, res) => {
    res.send('Hello World')
})

app.listen(4343, () => {
    console.log('Server running at localhost:4343')
})