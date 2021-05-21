const express = require('express')
const router = express.Router()
const StatusCodes = require('http-status-codes').StatusCodes

const MatchService = require('../services/match-service')
const MatchStatus = require('../constants/match-status')

// get all matches
router.get('/all', async (req, res) => {
    const matches = await MatchService.findAll()
    res.render('match/all', {matches})
})

router.get('/all/json', async (req, res) => {
    const matches = await MatchService.findAll()
    res.send(matches)
})

// get match by id
router.get('/:id', async (req, res) => {
    const match = await MatchService.find(req.params.id)
    if (!match) res.status(StatusCodes.NOT_FOUND)
    res.render('match/index', {match})
})

router.get('/:id/json', async (req, res) => {
    const match = await MatchService.find(req.params.id)
    if (!match) res.status(StatusCodes.NOT_FOUND)
    res.send(match)
})

// create a new match
router.post('/', async (req, res) => {
    const match = await MatchService.add(req.body)
    if (match) res.status(StatusCodes.CREATED)
    res.send(match)
})

// delete match by id
router.delete('/:id', async (req, res) => {
    const deletedMatch = await MatchService.del(req.params.id)
    if (deletedMatch) res.status(StatusCodes.NO_CONTENT)
    res.send(deletedMatch)
})

// set status of the match
router.post('/:id/set-status', async (req, res) => {
    const match = await MatchService.find(req.params.id)
    const status = req.body.status

    await MatchService.setMatchStatus(match, status)
    
    res.send(match)
})

module.exports = router