const Team = require('./Team')
const Match = require('./Match')
const Player = require('./Player')
const Database = require('./database')

const loadedFile = Database.load("team.json")

const yedlin = new Player("DeAndre", "Yedlin", 27)
const gs = Team.create(loadedFile)

gs.addPlayer(yedlin)

console.log(gs)