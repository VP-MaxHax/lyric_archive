# Lyric_archive

This project is a full-stack application built with Node.js for the backend and React.js for the frontend. Below are the details for setting up and running frontend of the application.

## Frontend

The frontend is built using React.js. It is located in the `frontend` directory.

### Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

### Usage

- The main component is located in `src/App.js`.
- Reusable components can be found in `src/components/`.
- Main pages are located in `src/pages/`.

## Backend

The backend is built using Node.js and Express. It is located in the `backend` directory.

### Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

## API Endpoints

Refer to the backend README.md for a list of available API endpoints and their usage.

### Features
- **Home Page**: Displays a list of songs.
- **Song Detail Page**: Displays details of a     specific song.
- **User Authentication**: Allows users to register and log in.
- **Header**: Contains navigation links and login/register functionality.
- **Footer**: Contains footer content.

### Components
- **Header**: Displays the navigation bar and handles user login and registration.
- **Footer**: Displays the footer content.
- **Modal**: Displays a modal popup for user registration.
- **RegisterForm**: Contains the form for user registration.

### Context
- **AuthContext**: Manages user authentication state.

### Pages
- **HomePage**: Displays a list of songs.
- **SongDetail**: Displays details of a specific song.

## Technologies Used

- Node.js
- React
- MongoDB
- Mongoose
- Express
- Axios