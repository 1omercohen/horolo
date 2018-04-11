var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    subject: String,
    message: String,
    readed: { type: Boolean, default: false },
    created: Date
});

module.exports = mongoose.model('Message', MessageSchema);
