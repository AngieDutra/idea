const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Start
router.get('/',mainController.start);

// Game
router.get('/game',mainController.game);

module.exports = router;