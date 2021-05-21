const test = require('ava')
const request = require('supertest')
const app = require('../app')

const StatusCodes = require('http-status-codes').StatusCodes

test('Check app status', async t => {
    t.plan(1)

    const appRes = await request(app).get('/')

    t.is(appRes.status, StatusCodes.OK)
})