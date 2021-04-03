const BaseService = require('./base-service')
const MatchModel = require('../models/match')

class MatchService extends BaseService {
    constructor() {
        super(MatchModel, `${__dirname}/../match-database.json`)
    }
}

module.exports = new MatchService()