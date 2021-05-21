const test = require('ava')
const request = require('supertest')
const app = require('../app')
const StatusCodes = require('http-status-codes').StatusCodes

test('Create a new player', async t => {
    t.plan(4)

    const playerToCreate = {
        name: 'Kerem',
        surname: 'Aktürkoğlu',
        age: 18
    }

    const res = await request(app)
    .post('/player')
    .send(playerToCreate)

    t.is(res.status, StatusCodes.CREATED)

    t.is(res.body.name, playerToCreate.name)
    t.is(res.body.surname, playerToCreate.surname)
    t.is(res.body.age, playerToCreate.age)
})

test('List all player', async t => {
    t.plan(5)

    const playerToCreate = {
        name: 'Oğulcan',
        surname: 'Çağlayan',
        age: 19
    }

    const _ = await request(app)
    .post('/player')
    .send(playerToCreate)

    t.is(_.status, StatusCodes.CREATED)
     
    const res = await request(app).get('/player/all')
    t.is(res.status, StatusCodes.OK)

    const jsonRes = await request(app).get('/player/all/json')
    t.is(jsonRes.status, StatusCodes.OK)

    t.true(Array.isArray(jsonRes.body), 'Body should be an array!')
    t.true(jsonRes.body.length > 0)
})

test('Fetch a player', async t => {
    t.plan(4)

    const playerToCreate = {
        name: 'Halil İbrahim',
        surname: 'Dervişoğlu',
        age: 21
    }

    const hid = await request(app)
    .post('/player')
    .send(playerToCreate)

    t.is(hid.status, StatusCodes.CREATED)

    const fetchedPlayer = await request(app).get(`/player/${hid.body._id}`)
    t.is(fetchedPlayer.status, StatusCodes.OK)

    const fetchedPlayerJson = await request(app).get(`/player/${hid.body._id}/json`)
    t.is(fetchedPlayerJson.status, StatusCodes.OK)

    const hidFetched = fetchedPlayerJson.body

    t.deepEqual(hidFetched, hid.body)
})

test('Delete a player', async t => {
    t.plan(5)

    const playerToCreate = {
        name: 'Halil İbrahim',
        surname: 'Dervişoğlu',
        age: 21
    }

    const hid = await request(app)
    .post('/player')
    .send(playerToCreate)

    t.is(hid.status, StatusCodes.CREATED)

    const deletedPlayer = await request(app).delete(`/player/${hid.body._id}`)

    t.is(deletedPlayer.status, StatusCodes.NO_CONTENT)
    t.is(deletedPlayer.ok, true)

    const fetchCheck = await request(app).get(`/player/${hid.body._id}`)
    t.is(fetchCheck.status, StatusCodes.NOT_FOUND)

    const fetchCheckJson = await request(app).get(`/player/${hid.body._id}/json`)
    t.is(fetchCheckJson.status, StatusCodes.NOT_FOUND)

})


test('Join a team', async t => {
    t.plan(4)

    const playerToCreate = {
        name: 'Halil İbrahim',
        surname: 'Dervişoğlu',
        age: 21
    }

    const hid = await request(app)
    .post('/player')
    .send(playerToCreate)

    t.is(hid.status, StatusCodes.CREATED)

    const teamToCreate = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const team = await request(app)
    .post('/team')
    .send(teamToCreate)

    t.is(team.status, StatusCodes.CREATED)

    const joinedTeam = await request(app)
    .post(`/player/${hid.body._id}/team`)
    .send({team: team.body._id})

    t.is(joinedTeam.status, StatusCodes.OK)

    t.is(joinedTeam.body.currentTeam, team.body._id)

})