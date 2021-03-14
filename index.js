const Team = require('./Team')
const Match = require('./Match')
const Player = require('./Player')
const Database = require('./database')

// gs
const muslera = new Player("Nando", "Muslera", 34)
const falcao = new Player("Radamel", "Falcao", 35)
const babel = new Player("Ryan", "Babel", 33)
const donk = new Player("Ryan", "Donk", 33)
const belhanda = new Player("Younes", "Belhanda", 34)

// bjk
const atiba = new Player("Atiba", "Hutchinson", 38)
const larin = new Player("Cyle", "Larin", 25)
const ljajic = new Player("Adem", "Ljajic", 29)
const vida = new Player("Domagoj", "Vida", 31)
const ghezzal = new Player("Rachid", "Ghezzal", 28)

const gs = new Team("Galatasaray")

gs.addPlayer(muslera)
gs.addPlayer(falcao)
gs.addPlayer(babel)
gs.addPlayer(donk)
gs.addPlayer(belhanda)

const bjk = new Team("Besiktas")
bjk.addPlayer(atiba)
bjk.addPlayer(larin)
bjk.addPlayer(ljajic)
bjk.addPlayer(vida)
bjk.addPlayer(ghezzal)

const today = new Date()
const match1 = new Match(gs, bjk, today, "TSL")

Database.save("match.json", match1)
Database.save("team.json", gs)

const data = Database.load("match.json")

console.log(data)