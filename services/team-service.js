const BaseService = require('./base-service')
const TeamModel = require('../models/team')

class TeamService extends BaseService {
    constructor() {
        super(TeamModel, `${__dirname}/../team-database.json`)
    }
}

module.exports = new TeamService()