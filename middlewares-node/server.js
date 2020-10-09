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

function decryptQueryParams(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q]
        data = data.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        })
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res) => {
    // console.log(req.query)
    res.send(req.query.code)
})

app.listen(4545, () => {
    console.log('Server Running at localhost:4545')
})