const express = require('express')
const PlayerService = require('./services/player-service')

const app = express()

app.use(express.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/player/all', async (req, res) => {
    const players = await PlayerService.findAll()
    res.render('player-list', {players})
})

app.get('/player/:id', async (req, res) => {
    const player = await PlayerService.find(req.params.id)
    res.render('player', {player})
})

app.post('/player', async (req, res) => {
    const item = await PlayerService.add(req.body)
    res.send(item)
})

app.delete('/player/:id', async (req, res) => {
    const deletedPlayer = PlayerService.del(req.params.id)
    res.send(deletedPlayer)
})

app.listen(3000, () => {
    console.log('Server listening')
})