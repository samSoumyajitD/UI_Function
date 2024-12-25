import React from "react";
import "./Auth.css";
import pie from "../assets/pie.png";
import logos from "../assets/logos.png";
import subtract from "../assets/Subtract.png";
import Welcome from "./AuthSubComponent/Welcome";
const AuthCard = () => {
  return (
    <div className="welcome-container">
    <div  className="dashboard-card">
    <div className="ai-card">
      <div className="ai-card-header">
        <img
          src={logos} // Replace with your logo's source
          alt="AI Logo"
          className="ai-logo"
        />
        <h3>AI to Detect & Autofix Bad Code</h3>
      </div>
      <div className="ai-card-stats">
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
    <div className="issues-card">
      <div className="issues-details">
      <div className="issues-logo">
      
      <img src={pie} alt="pie-logo" />
      
      <div>
          <h4>Issues Fixed</h4>
          <p className="issues-count">500K+</p>
        </div>

      </div>
      
      <div className="growth">
        <span>↑ 14%</span>
        <p>This week</p>
      </div>
     
        <div className="pie-logo-container">
          
        </div>
      
      </div>
    
    </div>
    <img src={subtract} alt="subtr-logo" className="subtr-logo"/>
    </div>


    <div className="welcome" >
    <Welcome/>
    <div className="policy">By signing up you agree to the <span>Privacy Policy.</span></div>
    </div>
   
    </div>
  );
};

export default AuthCard ;
