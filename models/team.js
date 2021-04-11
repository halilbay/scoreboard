const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    squad: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Player',
        autopopulate: {
            maxDepth: 1
        }
    }],
    coach: {
        type: String
    },
    matches: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Match',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

TeamSchema.plugin(require('mongoose-autopopulate'))
const TeamModel = mongoose.model('Team', TeamSchema)

module.exports = TeamModel
