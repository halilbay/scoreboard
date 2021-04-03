const Player = require('./models/player')
const Team = require('./models/team')

const PlayerService = require('./services/player-service')
const TeamService = require('./services/team-service')

async function main() {
    const belhanda = new Player('Younes', 'Belhanda', 34)
    const muslera = new Player('Nando', 'Muslera', 34)
    const falcao = new Player('Radamel', 'Falcao', 33)

    const gs = new Team('Galatasaray')
    gs.addPlayer(belhanda)
    gs.addPlayer(muslera)
    gs.addPlayer(falcao)

    gs.report()

    await PlayerService.add(belhanda)
    await PlayerService.add(muslera)
    await PlayerService.add(falcao)

    const players = await PlayerService.findAll()
    console.log(players[1].name)

    await PlayerService.del(2)

    const newPlayers = await PlayerService.findAll()
    console.log(players[1].name)

}

main()