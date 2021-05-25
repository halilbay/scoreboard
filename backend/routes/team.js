const express = require('express')
const StatusCodes = require('http-status-codes').StatusCodes
const router = express.Router()

const TeamService = require('../services/team-service')

// get all teams
router.get('/all', async (req, res) => {
    const teams = await TeamService.findAll()
    res.render('team/all', {teams})
})

router.get('/all/json', async (req, res) => {
    const teams = await TeamService.findAll()
    res.send(teams)
})

// get team by id
router.get('/:id', async (req, res) => {
    const team = await TeamService.find(req.params.id)
    if (!team) res.status(StatusCodes.NOT_FOUND)
    res.render('team/index', {team})
})

router.get('/:id/json', async (req, res) => {
    const team = await TeamService.find(req.params.id)
    if (!team) res.status(StatusCodes.NOT_FOUND)
    res.send(team)
})

// create a new team
router.post('/', async (req, res) => {
    const team = await TeamService.add(req.body)
    if (team) res.status(StatusCodes.CREATED)
    res.send(team)
})

// delete team by id
router.delete('/:id', async (req, res) => {
    const deletedTeam = await TeamService.del(req.params.id)
    if (deletedTeam) res.status(StatusCodes.NO_CONTENT)
    res.send(deletedTeam)
})

module.exports = router