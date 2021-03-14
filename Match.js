module.exports = class Match {
    constructor(teamHome, teamAway, matchDate, league) {
        this.teamHome = teamHome
        this.teamAway = teamAway
        this.matchDate = matchDate
        this.league = league
        this.stadium = ""
        this.refs = []

    }

    addInfo(stadium, refs){   
    }
}