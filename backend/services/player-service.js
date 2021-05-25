const BaseService = require('./base-service')
const PlayerModel = require('../models/player')

class PlayerService extends BaseService {
    model = PlayerModel

    async joinTeam(player, team) {
        player.currentTeam = team._id
        team.squad.push(player)

        player.save()
        team.save()
    }
}

module.exports = new PlayerService()