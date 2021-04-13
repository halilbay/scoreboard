const BaseService = require('./base-service')
const MatchModel = require('../models/match')

class MatchService extends BaseService {
    model = MatchModel

    async setMatchStatus(match, status) {
        match.status = status
        match.save()
    }
}

module.exports = new MatchService()