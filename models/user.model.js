'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contest Schema
 */
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
})

mongoose.model('User', UserSchema);