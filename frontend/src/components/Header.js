import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Modal from './Modal';
import RegisterForm from './RegisterForm';

const Header = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setMessage('Login successful');
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Lyric Archive</Link>
        </h1>
        {user ? (
          <div>
            <span>Welcome, {user.username}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              {message && <p>{message}</p>}
            </form>
            <button onClick={handleShowModal}>Register</button>
          </div>
        )}
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <RegisterForm handleClose={handleCloseModal} />
      </Modal>
    </header>
  );
};

export default Header;