const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    let name = 'Guest'
    if (req.query.user) { name = req.query.user }
    res.send('Hello World ' + name)
})

app.use('/xyz', express.static(__dirname + '/public')) //mounting public on /xyz

app.listen(4321, () => {
    console.log('Server started on http://localhost:4321')
})