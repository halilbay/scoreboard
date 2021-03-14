module.exports = class Player {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.position = []
        this.currentTeam = ""
        this.age = age
    }

    addPosition(position) {
        this.position.push(position)
    }

    changeTeam(teamName) {
        this.currentTeam = teamName
    }
}