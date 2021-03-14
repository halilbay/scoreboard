module.exports = class Team {
    constructor(name) {
        this.name = name
        this.squad = []
        this.coach = ""
        this.matches = []
    }

    addPlayer(player) {
        this.squad.push(player)
        player.changeTeam(this.name)
    }

    addMatch(match) {
        this.matches.push(match)
    }
    
}