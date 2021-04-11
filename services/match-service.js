const BaseService = require('./base-service')
const MatchModel = require('../models/match')

class MatchService extends BaseService {
    model = MatchModel
}

module.exports = new MatchService()