const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
})
app.get('/greet', (req,res) => {
    let person = 'Guest'
    if(req.query.person){
        person = req.query.person
    }

    res.send('Good Morning '+ person)
})
app.post('/greet', (req,res) => {
    let person = 'Guest'
    if(req.body.person){
        person = req.body.person
    }

    res.send('Good Evening '+ person)
})
app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/files/form.html')
})

app.get('/:city/welcome',(req,res) => {
    res.send('Welcome to this city')
})


app.listen(4444,() => {
    console.log('server started on http://localhost:4444')
})

