var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User'},
    receiver: { type: Schema.Types.ObjectId, ref: 'User'},
    subject: String,
    message: String,
    readed: { type: Boolean, default: false },
    created: Date
});

module.exports = mongoose.model('Message', MessageSchema);
