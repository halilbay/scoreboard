const mongoose = require('mongoose')

async function main(){
    await mongoose.connect(
        process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/scoreboard', { useUnifiedTopology: true, useNewUrlParser: true })
    console.log('connected')
}

main()