var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController");
var msg = require("../controllers/MessageController");

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

router.get('/users', auth.getUsers);

router.post('/messages/create', msg.create);

router.get('/users/messages/:userId', msg.getAllMessagesUser);

router.get('/users/messages/unreaded/:userId', msg.getUnreadMessagesUser);

router.get('/messages/:messageId', msg.getMessage);

router.post('/messages/:messageId', msg.delete);

module.exports = router;
