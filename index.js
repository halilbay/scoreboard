const express = require('express')

const playerRouter = require('./routes/player')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')

app.use(express.json())

// routers
app.use('/player', playerRouter)

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000, () => {
    console.log('Server listening')
})