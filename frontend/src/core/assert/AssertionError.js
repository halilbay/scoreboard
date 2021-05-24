export class AssertionError extends Error {
    constructor (message) {
        super(message)
        this.message = message || 'Scoreboard assertion error'
        this.code = 'SCOREBOARD_ASSERTION_ERROR'
    }
}