const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    surname: {
        type: String,
        required: true,
        minLength: 2
    },
    age: {
        type: Number,
        required: true,
        min: 15
    },
    currentTeam: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team',
        autopopulate: {
            maxDepth: 1
        }
    }
})

PlayerSchema.plugin(require('mongoose-autopopulate'))

const PlayerModel = mongoose.model('Player', PlayerSchema)

module.exports = PlayerModel
