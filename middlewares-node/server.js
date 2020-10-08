const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q]
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decodeQueryBase64, (req, res) => {
    console.log(req.query)
    res.send("=========Eval Result=============")
})

app.listen(4545, () => {
    console.log('Server Running at localhost:4545')
})