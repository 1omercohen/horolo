'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contest Schema
 */
var MessageSchema = new Schema({
    subject: String,
    message: String,
    readed: { type: Boolean, default: false },
    created: Date
})

mongoose.model('Message', MessageSchema);
