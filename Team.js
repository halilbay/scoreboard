module.exports = class Team {
    constructor(name, squad = []) {
        this.name = name
        this.squad = squad
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

    static create({name, squad}) {
        return new Team(name, squad)
    }
    
}