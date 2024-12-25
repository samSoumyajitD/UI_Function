import React, { useState, useEffect } from 'react'; // Importing necessary hooks from React
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import './CoverPage.css'; // Importing custom CSS styles

const CoverPage = () => {
  // State to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Function to update the current date and time
    const updateDateTime = () => {
      const now = new Date(); // Get the current date and time
      setCurrentDateTime(
        now.toLocaleString('en-US', {
          weekday: 'long', // Get the weekday name
          year: 'numeric', // Get the full year
          month: 'long', // Get the full month name
          day: 'numeric', // Get the day of the month
          hour: 'numeric', // Get the hour in numeric format
          minute: 'numeric', // Get the minutes
          second: 'numeric', // Get the seconds
          hour12: true, // Display in 12-hour format
        })
      );
    };

    updateDateTime(); // Call the function initially to set the date and time
    const intervalId = setInterval(updateDateTime, 1000); // Update the date and time every second

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="cover-page"> {/* Main container for the cover page */}
      <div className="content"> {/* Container for content */}
        <h1 className="title">Welcome to  </h1> {/* Title of the cover page */}
        <p className="subtitle">Your gateway to seamless UI and functionality</p> {/* Subtitle text */}
        <div className="buttons-container"> {/* Container for buttons */}
          <Link to="/auth" className="button primary"> {/* Link to login/sign-up page */}
            Login / Sign Up
          </Link>
          <Link to="assignment/repositories" className="button secondary"> {/* Link to dashboard page */}
            Dashboard
          </Link>
        </div>
      </div>
      <footer className="footer"> {/* Footer section */}
        <p className="date-time">{currentDateTime}</p> {/* Display current date and time */}
      </footer>
    </div>
  );
};

export default CoverPage; // Exporting the component to be used elsewhere
