# Lyric Archive Backend

This is the backend for the Lyric Archive application. It is built with Node.js, Express, and MongoDB. The backend provides RESTful API endpoints for managing songs and users.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for database hosting.

## Setup Instructions
1. Clone the repository:
   ```
   git clone git@github.com:VP-MaxHax/lyric_archive.git
   ```
2. Navigate to the backend directory:
   ```
   cd lyric_archive/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up MongoDB:
- Make sure MongoDB is installed and running on your machine.
- Create a `.env` file in the `backend` directory with the following content:
  ```
  MONGODB_URI='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<production_db>?retryWrites=true&w=majority&appName=Cluster0'

  MONGODB_TEST='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<test_db>?retryWrites=true&w=majority&appName=Cluster0'
  
  JWT_SECRET='your_jwt_secret_key'
  ```
- Replace `<username>`, `<password>`, `<test_db>` and `<production_db>` with your actual MongoDB Atlas credentials and database name.

- Replace `your_jwt_secret_key` with a secure secret key for JWT.

5. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Song

- **GET /api/songs**: Retrieve a list of songs.
- **POST /api/songs**: Create a new song with `title` and `lyrics`.
- **GET /api/songs/:id**: Retrieve a song by its ID.
- **PUT /api/songs/:id**: Updates song data by its ID
- **DELETE /api/songs/:id**: Delete a song by its ID.

### User

- **GET /api/users**: Retrieve a list of users.
- **POST /api/users**: Create a new user with `username` and `password`.
- **GET /api/users/:id**: Retrieve a user by its ID.
- **PUT /api/users/:id**: Updates users data by its ID
- **DELETE /api/users/:id**: Delete a user by its ID.

### Authentication

- **POST /api/auth/login**: Authenticate a user and return a JWT token.
- **GET /api/auth/me**: Retrieve the authenticated user's information (requires JWT token).

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Jest (for testing)
- Supertest (for testing)

## Testing
- **Run tests**
  ```
  npm test
  ```
  