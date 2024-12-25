import React from "react";
import "./Auth.css"; // Importing CSS for styling
import pie from "../assets/pie.png"; // Importing pie chart logo
import logos from "../assets/logos.png"; // Importing AI logo
import subtract from "../assets/Subtract.png"; // Importing subtract logo
import Welcome from "./AuthSubComponent/Welcome"; // Importing the Welcome component

// AuthCard component renders the authentication card with AI stats, issues fixed, and a welcome section.
const AuthCard = () => {
  return (
    <div className="welcome-container">
      {/* Main dashboard card container */}
      <div className="dashboard-card">
        {/* AI stats card */}
        <div className="ai-card">
          <div className="ai-card-header">
            {/* Displaying the AI logo and title */}
            <img
              src={logos}
              alt="AI Logo"
              className="ai-logo"
            />
            <h3>AI to Detect & Autofix Bad Code</h3>
          </div>
          <div className="ai-card-stats">
            {/* Displaying stats in individual stat boxes */}
            <div className="stat">
              <h4>30+</h4>
              <p>Language Support</p>
            </div>
            <div className="stat">
              <h4>10K+</h4>
              <p>Developers</p>
            </div>
            <div className="stat">
              <h4>100K+</h4>
              <p>Hours Saved</p>
            </div>
          </div>
        </div>

        {/* Issues fixed card */}
        <div className="issues-card">
          <div className="issues-details">
            <div className="issues-logo">
              {/* Displaying the pie chart logo */}
              <img src={pie} alt="pie-logo" />

              <div>
                {/* Displaying the count of issues fixed */}
                <h4>Issues Fixed</h4>
                <p className="issues-count">500K+</p>
              </div>
            </div>

            {/* Growth section showing percentage change */}
            <div className="growth">
              <span>↑ 14%</span>
              <p>This week</p>
            </div>

            <div className="pie-logo-container">
              {/* Placeholder for additional content */}
            </div>
          </div>
        </div>

        {/* Subtract logo positioned at the bottom */}
        <img src={subtract} alt="subtr-logo" className="subtr-logo" />
      </div>

      {/* Welcome section */}
      <div className="welcome">
        <Welcome /> {/* Rendering the Welcome component */}
        <div className="policy">
          {/* Privacy policy statement */}
          By signing up you agree to the <span>Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
