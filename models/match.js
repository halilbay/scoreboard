const mongoose = require('mongoose')

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
    date: Date,
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
