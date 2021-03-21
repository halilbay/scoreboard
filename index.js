const Team = require('./Team')
const Match = require('./Match')
const Player = require('./Player')
const Database = require('./database')

const callback = (err, loadedFile) => {
    if(err) {
        console.log("An error occured", err)
        return
    }
    const yedlin = new Player("DeAndre", "Yedlin", 27)
    const gs = Team.create(loadedFile)
    
    gs.addPlayer(yedlin)
    
    console.log(gs)
}

Database.load("team.json", callback)