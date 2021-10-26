const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Start
router.get('/',mainController.start);

// Game
router.get('/game',mainController.game);

//Register
router.get('/register',mainController.register);

//Ballot
router.get('/ballot',mainController.ballot);

module.exports = router;