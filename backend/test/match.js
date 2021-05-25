const test = require('ava')
const request = require('supertest')
const app = require('../app')
const MatchStatus = require('../constants/match-status')
const StatusCodes = require('http-status-codes').StatusCodes

test('Create a new match', async t => {
    t.plan(4)

    const home = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const away = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }

    const gs = await request(app)
    .post('/team')
    .send(home)

    const bjk = await request(app)
    .post('/team')
    .send(away)

    const match = await request(app)
    .post('/match')
    .send({
        "home": gs._id,
        "away": bjk._id
    })

    t.is(match.status, StatusCodes.CREATED)

    t.is(match.body.home, gs._id)
    t.is(match.body.away, bjk._id)
    t.is(match.body.status, MatchStatus.notStarted)

})

test('Fetch a match', async t => {
    t.plan(3)

    const home = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const away = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }

    const gs = await request(app)
    .post('/team')
    .send(home)

    const bjk = await request(app)
    .post('/team')
    .send(away)

    const match = await request(app)
    .post('/match')
    .send({
        "home": gs._id,
        "away": bjk._id
    })

    t.is(match.status, StatusCodes.CREATED)

    const fetchedMatch = await request(app).get(`/match/${match.body._id}`)
    t.is(fetchedMatch.status, StatusCodes.OK)

    t.is(fetchedMatch.body.home, match.body.home)
})

test('List all matches', async t => {
    t.plan(5)

    const home = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const away = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }

    const gs = await request(app)
    .post('/team')
    .send(home)

    const bjk = await request(app)
    .post('/team')
    .send(away)

    const match = await request(app)
    .post('/match')
    .send({
        "home": gs._id,
        "away": bjk._id
    })

    t.is(match.status, StatusCodes.CREATED)

    const fetchedMatch = await request(app).get(`/match/all`)
    t.is(fetchedMatch.status, StatusCodes.OK)

    const fetchedMatchJson = await request(app).get(`/match/all/json`)
    t.is(fetchedMatchJson.status, StatusCodes.OK)
    t.true(Array.isArray(fetchedMatchJson.body), 'Should be an array')
    t.true(fetchedMatchJson.body.length > 0)
    
})

test('Delete a match', async t => {
    t.plan(4)

    const home = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const away = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }

    const gs = await request(app)
    .post('/team')
    .send(home)

    const bjk = await request(app)
    .post('/team')
    .send(away)

    const match = await request(app)
    .post('/match')
    .send({
        "home": gs._id,
        "away": bjk._id
    })

    t.is(match.status, StatusCodes.CREATED)

    const deletedMatch = await request(app).delete(`/match/${match.body._id}`)
    t.is(deletedMatch.status, StatusCodes.NO_CONTENT)

    const fetchedMatch = await request(app).get(`/match/${match.body._id}`)
    t.is(fetchedMatch.status, StatusCodes.NOT_FOUND)

    const fetchedMatchJson = await request(app).get(`/match/${match.body._id}/json`)
    t.is(fetchedMatchJson.status, StatusCodes.NOT_FOUND)
})

test('Set status of a match', async t => {
    t.plan(2)

    const home = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const away = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }

    const gs = await request(app)
    .post('/team')
    .send(home)

    const bjk = await request(app)
    .post('/team')
    .send(away)

    const match = await request(app)
    .post('/match')
    .send({
        "home": gs._id,
        "away": bjk._id
    })

    t.is(match.status, StatusCodes.CREATED)

    const setMatch = await request(app)
    .post(`/match/${match.body._id}/set-status`)
    .send({status: MatchStatus.playing})

    const fetchedMatchJson = await request(app).get(`/match/${setMatch.body._id}/json`)

    t.is(fetchedMatchJson.body.status, MatchStatus.playing)
})