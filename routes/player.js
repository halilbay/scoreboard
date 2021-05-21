const express = require('express')
const router = express.Router()
const StatusCodes = require('http-status-codes').StatusCodes

const PlayerService = require('../services/player-service')
const TeamService = require('../services/team-service')

router.get('/all', async (req, res) => {
    const players = await PlayerService.findAll()
    res.render('player/all', {players})
})

router.get('/all/json', async (req, res) => {
    const players = await PlayerService.findAll()
    res.send(players)
})

router.get('/:id', async (req, res) => {
    const player = await PlayerService.find(req.params.id)
    if (!player) res.status(StatusCodes.NOT_FOUND)
    res.render('player/index', {player})
})

router.get('/:id/json', async (req, res) => {
    const player = await PlayerService.find(req.params.id)
    if (!player) res.status(StatusCodes.NOT_FOUND)
    res.send(player)
})

router.post('/', async (req, res) => {
    const player = await PlayerService.add(req.body)
    if (player) res.status(StatusCodes.CREATED)
    res.send(player)
})

router.delete('/:id', async (req, res) => {
    const deletedPlayer = PlayerService.del(req.params.id)
    if (deletedPlayer) res.status(StatusCodes.NO_CONTENT)
    res.send(deletedPlayer)
})

router.post('/:id/team', async (req, res) => {
    const player = await PlayerService.find(req.params.id)
    const team = await TeamService.find(req.body.team)

    await PlayerService.joinTeam(player, team)

    res.send(player)
})

module.exports = router