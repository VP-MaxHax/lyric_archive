# Lyric Archive

## Overview
This is a full-stack application built using Node.js, Express, MongoDB, and React. The application allows users to view and manage song lyrics.

## Setup Instructions

1. Clone the repository:
   ```
   git clone git@github.com:VP-MaxHax/lyric_archive.git
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up MongoDB

- Make sure MongoDB is installed and running on your machine.
- Create a `.env` file in the `backend` directory with the following content:

```
MONGODB_URI='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0'
```

- Replace `<username>`, `<password>`, and `<dbname>` with your actual MongoDB Atlas credentials and database name.

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### API Endpoints and Example Requests

Refer to the backend README.md for a list of available API endpoints, their usage and example requests.

### Frontend Usage

Refer to the frontend README.md for details on how to navigate and use the frontend application.

### Folder Structure

- `backend/src/app.js`: Entry point of the backend application.
- `backend/src/controllers/songController.js`: Contains the controller logic for songs.
- `backend/src/routes/songRoutes.js`: Defines the API routes for songs.
- `backend/src/models/Song.js`: Contains the database model for songs.
- `backend/src/db.js`: Handles the database connection.
- `frontend/src/App.js`: Entry point of the frontend application.
- `frontend/src/pages/HomePage.js`: Home page component.
- `frontend/src/pages/SongDetail.js`: Song detail page component.
- `frontend/src/components/Header.js`: Header component.
- `frontend/src/components/Footer.js`: Footer component.
- `frontend/src/styles/style.css`: CSS styles for the frontend application.
