const BaseService = require('./base-service')
const PlayerModel = require('../models/player')

class PlayerService extends BaseService {
    constructor() {
        super(PlayerModel, `${__dirname}/../player-database.json`)
    }
}

module.exports = new PlayerService()