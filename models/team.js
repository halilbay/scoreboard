module.exports = class Team {
    constructor(name, id, squad = []) {
        this.name = name
        this.squad = squad
        this.id = id
        this.coach = ""
        this.matches = []
    }

    addPlayer(player) {
        this.squad.push(player)
        console.log(`The player: ${player.name} has joined ${this.name}!`)
        //player.changeTeam(this.name)
    }

    addMatch(match) {
        this.matches.push(match)
    }

    report() {
        console.log(`${this.name} football team has ${this.squad.length} player(s)`)
    }

    static create({name, squad, id}) {
        return new Team(name, squad, id)
    }
    
}