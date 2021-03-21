const fs = require('fs')

const save = function(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data))
}

const load = function(fileName, callback) {
    fs.readFile(fileName, 'utf8', (err, file) => {
        if(err){
            console.log("There is a read error", err)
            callback(err)
            return
        }
        
        callback(null, JSON.parse(file))
        
    } )
}

module.exports = { save, load }