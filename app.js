const express = require('express')
const cors = require('cors')
require('./mongo-connection')

const playerRouter = require('./routes/player')
const teamRouter = require('./routes/team')
const matchRouter = require('./routes/match')

const app = express()

app.set('view engine', 'pug')

app.use(express.json())
app.use(cors())

// routers
app.use('/player', playerRouter)
app.use('/match', matchRouter)
app.use('/team', teamRouter)

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app