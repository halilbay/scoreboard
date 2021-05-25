const test = require('ava')
const request = require('supertest')
const app = require('../app')
const StatusCodes = require('http-status-codes').StatusCodes

test('Create a team', async t => {
    t.plan(4)
    const teamToCreate = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }

    const team = await request(app)
    .post('/team')
    .send(teamToCreate)

    t.is(team.status, StatusCodes.CREATED)

    t.is(team.body.name, teamToCreate.name)
    t.is(team.body.coach, teamToCreate.coach)
    t.deepEqual(team.body.squad, teamToCreate.squad)
})

test('Fetch all teams', async t => {
    t.plan(5)

    const teamToCreate = {
        name: "Galatasaray",
        squad: [],
        coach: "Fatih Terim"
    }
    
    const _ = await request(app)
    .post('/team')
    .send(teamToCreate)

    t.is(_.status, StatusCodes.CREATED)

    const teams = await request(app).get('/team/all')
    t.is(teams.status, StatusCodes.OK)

    const teamsJson = await request(app).get('/team/all/json')
    t.is(teamsJson.status, StatusCodes.OK)
    t.true(Array.isArray(teamsJson.body), 'Should be an array')
    t.true(teamsJson.body.length > 0)

})

test('Fetch a team', async t => {
    t.plan(4)

    const teamToCreate = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }
    
    const bjk = await request(app)
    .post('/team')
    .send(teamToCreate)

    t.is(bjk.status, StatusCodes.CREATED)

    const fetchedTeam = await request(app).get(`/team/${bjk.body._id}`)
    t.is(fetchedTeam.status, StatusCodes.OK)

    const fetchedTeamJson = await request(app).get(`/team/${bjk.body._id}/json`)
    t.is(fetchedTeamJson.status, StatusCodes.OK)
    t.deepEqual(fetchedTeamJson.body, bjk.body)

})

test('Delete a team', async t => {
    t.plan(4)

    const teamToCreate = {
        name: "Beşiktaş",
        squad: [],
        coach: "Ali Rıza Sergen Yalçın"
    }
    
    const bjk = await request(app)
    .post('/team')
    .send(teamToCreate)

    t.is(bjk.status, StatusCodes.CREATED)

    const deletedTeam = await request(app).delete(`/team/${bjk.body._id}`)
    t.is(deletedTeam.status, StatusCodes.NO_CONTENT)

    const fetchedTeam = await request(app).get(`/team/${bjk.body._id}`)
    t.is(fetchedTeam.status, StatusCodes.NOT_FOUND)

    const fetchedTeamJson = await request(app).get(`/team/${bjk.body._id}/json`)
    t.is(fetchedTeamJson.status, StatusCodes.NOT_FOUND)
})