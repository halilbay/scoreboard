const BaseService = require('./base-service')
const PlayerModel = require('../models/player')

class PlayerService extends BaseService {
    model = PlayerModel
}

module.exports = new PlayerService()