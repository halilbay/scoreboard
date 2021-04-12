const express = require('express')
require('./mongo-connection')

const playerRouter = require('./routes/player')
const teamRouter = require('./routes/team')
const matchRouter = require('./routes/match')

const app = express()

app.set('view engine', 'pug')

app.use(express.json())

// routers
app.use('/player', playerRouter)
app.use('/match', matchRouter)
app.use('/team', teamRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server listening')
})