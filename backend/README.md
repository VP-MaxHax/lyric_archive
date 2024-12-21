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
   cd my-node-react-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **GET /api/items**: Retrieve a list of items.
- **POST /api/items**: Create a new item.

## Technologies Used
- Node.js
- Express
- MongoDB (or any other database you choose)

## Folder Structure
- `src/app.js`: Entry point of the application.
- `src/controllers/index.js`: Contains the controller logic.
- `src/routes/index.js`: Defines the API routes.
- `src/models/index.js`: Contains the database models.