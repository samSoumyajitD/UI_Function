import React, { useState } from "react"; 
import "./Welcome.css"; // Importing the CSS file for styling
import logo from "../../assets/logo.png"; // Importing logo image
import az from "../../assets/az.png"; // Importing Azure logo
import bit from "../../assets/bit.png"; // Importing Bitbucket logo
import git from "../../assets/git.png"; // Importing GitHub logo
import gitlab from "../../assets/glab.png"; // Importing GitLab logo
import key from "../../assets/key.png"; // Importing SSO logo

// The Welcome component displays a welcome screen with authentication options.
const Welcome = () => {
  // State to manage the currently active section (either "SAAS" or "Self Hosted")
  const [activeSection, setActiveSection] = useState("SAAS");

  // Function to handle section change when a button is clicked
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="welcome-box">
      {/* Top section of the welcome box containing logo, title, and buttons */}
      <div className="welcome-box-top">
        <div className="logo-container">
          <img src={logo} alt="logo" className="sub-logo" />
          <h1>CodeAnt AI</h1>
        </div>
        <h2>Welcome to CodeAnt AI</h2>
        
        {/* Buttons to switch between "SAAS" and "Self Hosted" sections */}
        <div className="button-container">
          <div
            className={`button-section ${activeSection === "SAAS" ? "active" : ""}`}
            onClick={() => handleClick("SAAS")}
          >
            SAAS
          </div>
          <div
            className={`button-section ${activeSection === "Self Hosted" ? "active" : ""}`}
            onClick={() => handleClick("Self Hosted")}
          >
            Self Hosted
          </div>
        </div>
      </div>

      {/* Authentication container to display options based on the active section */}
      <div className="auth-container">
        {/* Options for "SAAS" section */}
        {activeSection === "SAAS" && (
          <div>
            <div className="auth-butn">
              <img src={git} alt="github" />
              <div className="auth-cont">Sign in with Github</div>
            </div>
            <div className="auth-butn">
              <img src={bit} alt="bitbucket" />
              <div className="auth-cont">Sign in with Bitbucket</div>
            </div>
            <div className="auth-butn">
              <img src={az} alt="azure devops" />
              <div className="auth-cont">Sign in with Azure Devops</div>
            </div>
            <div className="auth-butn">
              <img src={gitlab} alt="gitlab" />
              <div className="auth-cont">Sign in with GitLab</div>
            </div>
          </div>
        )}

        {/* Options for "Self Hosted" section */}
        {activeSection === "Self Hosted" && (
          <div>
            <div className="auth-butn">
              <img src={gitlab} alt="gitlab" />
              <div className="auth-cont">Self Hosted GitLab</div>
            </div>
            <div className="auth-butn">
              <img src={key} alt="sso" />
              <div className="auth-cont">Sign in with SSO</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
