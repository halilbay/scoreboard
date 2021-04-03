module.exports = class Match {
    constructor(teamHome, teamAway, matchDate, league, id) {
        this.teamHome = teamHome
        this.teamAway = teamAway
        this.matchDate = matchDate
        this.league = league
        this.id = id
        this.stadium = ""
        this.refs = []

    }

    addInfo(stadium, refs){   
        this.stadium = stadium
        this.refs = refs
    }

    static create({home, away, date, league, id}) {
        return new Match(home, away, date, league, id)
    }
}