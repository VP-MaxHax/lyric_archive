const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Get all song titles
router.get('/', songController.getSongs);

// Get a song by ID
router.get('/:id', songController.getSongById);

// Create a new song
router.post('/', songController.createSong);

// Delete a song by ID
router.delete('/:id', songController.deleteSong);

module.exports = router;