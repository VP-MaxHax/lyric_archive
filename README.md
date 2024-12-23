# Lyric Archive Frontend

This is the frontend for the Lyric Archive application. It is built with React and provides a user interface for managing song lyrics.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Setup Instructions

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

- React
- React Router
- Axios (for HTTP requests)
- Context API (for state management)
