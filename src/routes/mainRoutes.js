const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Start
router.get('/',mainController.start);

// Game
router.get('/game',mainController.game);

//Register
router.put('/register',mainController.register);

//Ballot
router.post('/ballot',mainController.createUser);

module.exports = router;