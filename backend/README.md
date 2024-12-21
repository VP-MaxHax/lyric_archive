# Lyric archive

## Overview
This is the backend part of the Node.js and React.js application. It is built using Express and serves as the API for the frontend application.

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
  MONGODB_URI='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0'
  ```
- Replace `<username>`, `<password>`, and `<dbname>` with your actual MongoDB Atlas credentials and database name.

5. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **GET /api/songs**: Retrieve a list of songs with only `title` and `lyrics` fields.
- **POST /api/songs**: Create a new song with `title` and `lyrics`.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Folder Structure
- `src/app.js`: Entry point of the application.
- `src/controllers/songController.js`: Contains the controller logic for songs.
- `src/routes/songRoutes.js`: Defines the API routes for songs.
- `src/models/Song.js`: Contains the database model for songs.
- `src/db.js`: Handles the database connection.
- `.env`: Environment variables file (not included in the repository).

## Example Requests
- **Get all songs**:
  ```
  curl.exe -X GET http://localhost:5000/api/songs
  ```
- **Create a new song**:
  ```
  curl.exe -X POST http://localhost:5000/api/songs -H "Content-Type: application/json" -d "{\"title\": \"Song Title\", \"lyrics\": \"Liiba Laaba\"}"
  ```

Make sure to replace the placeholders in the .env file with your actual MongoDB Atlas credentials.

## Testing
- **Run tests**
  ```
  npm test
  ```
  