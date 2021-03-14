const fs = require('fs')

const save = function(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data))
}

const load = function(fileName) {
    return JSON.parse(fs.readFileSync(fileName, "utf8"))
}

module.exports = { save, load }