import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoverPage.css';

const CoverPage = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(
        now.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        })
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="cover-page">
      <div className="content">
        <h1 className="title">Welcome to  </h1>
        <p className="subtitle">Your gateway to seamless UI and functionality</p>
        <div className="buttons-container">
          <Link to="/auth" className="button primary">
            Login / Sign Up
          </Link>
          <Link to="assignment/repositories" className="button secondary">
            Dashboard
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p className="date-time">{currentDateTime}</p>
      </footer>
    </div>
  );
};

export default CoverPage;
