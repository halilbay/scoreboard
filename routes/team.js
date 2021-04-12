const express = require('express')
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
    res.render('team/index', {team})
})

// create a new team
router.post('/', async (req, res) => {
    const team = await TeamService.add(req.body)
    res.send(team)
})

// delete team by id
router.delete('/:id', async (req, res) => {
    const deletedTeam = await TeamService.del(req.params.id)
    res.send(deletedTeam)
})

module.exports = router