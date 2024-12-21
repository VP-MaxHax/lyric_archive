const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Get all songs
router.get('/', songController.getSongs);

// Create a new song
router.post('/', songController.createSong);

module.exports = router;