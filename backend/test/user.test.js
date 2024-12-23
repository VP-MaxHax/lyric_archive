process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
require('dotenv').config();

describe('User Database Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await new Promise((resolve) => mongoose.connection.once('open', resolve));
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
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
    const newUser = new User({
      username: 'testuser',
      password: 'password123',
    });

    await newUser.save();

    const user = await User.findOne({ username: 'testuser' });
    expect(user).not.toBeNull();
    expect(user.username).toBe('testuser');
  });

  test('should delete the newly added user from the database', async () => {
    const newUser = new User({
      username: 'testuser',
      password: 'password123',
    });

    await newUser.save();

    const user = await User.findOneAndDelete({ username: 'testuser' });
    expect(user).not.toBeNull();
    expect(user.username).toBe('testuser');
  });

  test('should check that the user no longer exists in the database', async () => {
    const newUser = new User({
      username: 'testuser',
      password: 'password123',
    });

    await newUser.save();

    await User.findOneAndDelete({ username: 'testuser' });

    const user = await User.findOne({ username: 'testuser' });
    expect(user).toBeNull();
  });

  test('should login and return a token', async () => {
    const newUser = new User({
      username: 'testuser',
      password: 'password123',
    });

    await newUser.save();

    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'password123' })
      .expect(200);

    expect(response.body.token).toBeDefined();
  });

  test('should access protected route with token', async () => {
    const newUser = new User({
      username: 'testuser',
      password: 'password123',
    });

    await newUser.save();

    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'password123' })
      .expect(200);

    const token = loginResponse.body.token;

    const meResponse = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(meResponse.body.username).toBe('testuser');
  });
});