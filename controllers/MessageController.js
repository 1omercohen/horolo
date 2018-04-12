var path = require('path');
var mongoose = require("mongoose");
var Message = require("../models/Message");

var messageController = {};

messageController.create = function(req, res){
    var msg = new Message();
    msg.sender = req.body.userSender;
    msg.receiver = req.body.userReceiver;
    msg.subject = req.body.subject;
    msg.message = req.body.message;
    msg.created = new Date();
    msg.save()
        .then(function(msg){
            res.status(200).json(msg);
        })
}

messageController.getAllMessagesUser = function(req, res){
    Message.find({receiver: req.params.userId})
        .then(function(messages){
            res.status(200).json(messages);
        })
}

messageController.getUnreadMessagesUser = function(req, res){
    Message.find({receiver: req.params.userId, readed: false})
        .then(function(messages){
            res.status(200).json(messages);
        })
}

messageController.delete = function(req, res){
    Message.remove({ _id: req.params.messageId })
        .then(function(){
            res.status(200).json({status: true})
        })
}

messageController.getMessage = function(req, res){
    Message.findOne({ _id: req.params.messageId })
        .then(function(msg){
            if(!msg.readed){
                msg.readed = true;
                msg.save(function(err){
                    if(err){
                        res.status(500).json(err);
                    }
                    res.status(200).json(msg);
                });
            }
            else{
                res.status(200).json(msg);
            }
        })
}

module.exports = messageController;