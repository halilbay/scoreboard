module.exports = class Player {
    constructor(name, surname, age, id) {
        this.name = name
        this.surname = surname
        this.id = id
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

    static create({name, surname, age, id}) {
        return new Player(name, surname, age, id)
    }
}