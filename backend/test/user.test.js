const mongoose = require('mongoose');
const User = require('../src/models/user');
require('dotenv').config();

describe('User Database Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should connect to the database successfully', () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1);
  });

  test('should add a new user to the database', async () => {
    const newUser = new User({
      username: 'testuser',
      password: 'password123',
    });

    const savedUser = await newUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe('testuser');
  });

  test('should fetch the newly added user from the database', async () => {
    const user = await User.findOne({ username: 'testuser' });
    expect(user).not.toBeNull();
    expect(user.username).toBe('testuser');
  });

  test('should delete the newly added user from the database', async () => {
      const user = await User.findOneAndDelete({ username: 'testuser' });
      expect(user).not.toBeNull();
      expect(user.username).toBe('testuser');
  });

  test('should check that the user no longer exists in the database', async () => {
      const user = await User.findOne({ username: 'testuser' });
      expect(user).toBeNull();
  });
});