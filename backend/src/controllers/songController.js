const Song = require('../models/Song');

exports.getSongs = async (req, res) => {
    try {
      const songs = await Song.find().select('title lyrics');
      res.json(songs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.createSong = async (req, res) => {
  const song = new Song({
    title: req.body.title,
    lyrics: req.body.lyrics,
  });

  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};