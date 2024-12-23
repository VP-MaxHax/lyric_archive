const Song = require('../models/song');

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find().select('title');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(song);
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

exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    song.title = req.body.title || song.title;
    song.lyrics = req.body.lyrics || song.lyrics;

    const updatedSong = await song.save();
    res.json(updatedSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json({ message: 'Song deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};