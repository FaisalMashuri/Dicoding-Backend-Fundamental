const ClientError = require('./ClientError')

class NoteFoundError extends ClientError {
    constructor(message){
        super(message, 404)
        this.name = 'NotFoundError'
    }
}

module.exports = NoteFoundError