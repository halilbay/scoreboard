const BaseService = require('./base-service')
const TeamModel = require('../models/team')

class TeamService extends BaseService {
    model = TeamModel
}

module.exports = new TeamService()