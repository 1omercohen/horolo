var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController");
var msg = require("../controllers/MessageController");

// route for register action
router.post('/register', auth.register);

// route for login action
router.post('/login', auth.login);

// route for logout action
router.get('/logout', auth.logout);

router.post('/messages/create', msg.create);

router.get('/users/messages/:userId', msg.getAllMessagesUser);

router.get('/users/messages/unreaded/:userId', msg.getUnreadMessagesUser);

router.get('/messages/:messageId', msg.getMessage);

router.post('/messages/:messageId', msg.delete);

module.exports = router;
