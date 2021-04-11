const express = require('express')
const router = express.Router()

const PlayerService = require('../services/player-service')

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now().toString())
    next()
})

router.get('/all', async (req, res) => {
    const players = await PlayerService.findAll()
    res.render('player-list', {players})
})

router.get('/:id', async (req, res) => {
    const player = await PlayerService.find(req.params.id)
    res.render('player', {player})
})

router.post('/', async (req, res) => {
    const item = await PlayerService.add(req.body)
    res.send(item)
})

router.delete('/:id', async (req, res) => {
    const deletedPlayer = PlayerService.del(req.params.id)
    res.send(deletedPlayer)
})

router.post('/:id/team', async (req, res) => {
    res.send('it works')
})

module.exports = router