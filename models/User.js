var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    email: { type: String, unique: true },
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
