import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/songs/${id}`);
        setSong(response.data);
      } catch (error) {
        console.error('Error fetching song:', error);
      }
    };

    fetchSong();
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="lyrics-box">
        <h1>{song.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: song.lyrics.replace(/\n/g, '<br />') }}></p>
      </div>
    </div>
  );
};

export default SongDetail;