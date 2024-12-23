const mongoose = require('mongoose');
const Song = require('../src/models/song');
const User = require('../src/models/user');
const app = require('../src/app');
require('dotenv').config();

describe('Database Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await new Promise((resolve) => mongoose.connection.once('open', resolve)); // Wait for the connection to be open
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should connect to the database successfully', async () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1);
  });

  // Song tests
  test('should add a new song to the database', async () => {
    const newSong = new Song({
      title: 'Test Song',
      lyrics: 'Test Lyrics',
    });

    const savedSong = await newSong.save();
    expect(savedSong._id).toBeDefined();
    expect(savedSong.title).toBe('Test Song');
    expect(savedSong.lyrics).toBe('Test Lyrics');
  });

  test('should fetch the newly added song from the database', async () => {
    const song = await Song.findOne({ title: 'Test Song' });
    expect(song).not.toBeNull();
    expect(song.title).toBe('Test Song');
    expect(song.lyrics).toBe('Test Lyrics');
  });

  test('should delete the newly added song from the database', async () => {
    const song = await Song.findOneAndDelete({ title: 'Test Song' });
    expect(song).not.toBeNull();
    expect(song.title).toBe('Test Song');
  });

  test('should check that the song no longer exists in the database', async () => {
    const song = await Song.findOne({ title: 'Test Song' });
    expect(song).toBeNull();
  });
});