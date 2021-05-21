const mongoose = require('mongoose')
const MatchStatus = require('../constants/match-status')

const MatchSchema = new mongoose.Schema({
    home: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team',
        autopopulate: {
            maxDepth: 1
        }
    },
    away: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team',
        autopopulate: {
            maxDepth: 1
        }
    },
    homeScore: {
        type: Number,
        default: 0
    },
    awayScore: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: Object.values(MatchStatus),
        default: MatchStatus.notStarted,
        required: true
    },
    date: {
        type: Date,
        default: new Date
    },
    stadium: String,
    league: String,
    refs: [{
        type: String,
        maxLength: 3
    }]
})

MatchSchema.plugin(require('mongoose-autopopulate'))
const MatchModel = mongoose.model('Match', MatchSchema)

module.exports = MatchModel
