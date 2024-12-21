import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="container">
      <h1>Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>
            <Link to={`/songs/${song._id}`}>{song.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;