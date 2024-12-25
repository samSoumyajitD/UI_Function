import React, { useState } from "react";
import "./Welcome.css";
import logo from "../../assets/logo.png";
import az from "../../assets/az.png";
import bit from "../../assets/bit.png";
import git from "../../assets/git.png";
import gitlab from "../../assets/glab.png";
import key from "../../assets/key.png";
const Welcome = () => {
  const [activeSection, setActiveSection] = useState("SAAS");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="welcome-box">
    <div className="welcome-box-top">
      <div className="logo-container">
        <img src={logo} alt="logo" className="sub-logo" />
        <h1>CodeAnt AI</h1>
      </div>
      <h2>Welcome to CodeAnt AI</h2>
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
      <div className="auth-container">
        {activeSection === "SAAS" && (
         <div>
            <div className="auth-butn"> 
            <img src = {git} alt="github"/>
            <div className="auth-cont">   Sign in with Github</div>
         
            </div>
            <div className="auth-butn"> 
            <img src={bit} alt="bitbucket"/>
            <div className="auth-cont">Sign in with Bitbucket</div>
            </div>
            <div className="auth-butn">
             <img src={az} alt="azur"/> 
            <div className="auth-cont"> Sign in with Azure Devops</div>
             </div>

            <div className="auth-butn"> 
            <img src={gitlab} alt="gitlab"/>
           <div className="auth-cont"> Sign in with GitLab
           </div>
            </div>
            
         </div>
        )}
        {activeSection === "Self Hosted" && (
          <div >

          <div>
         
         
            

            <div className="auth-butn">
             <img src={gitlab} alt ="gitlab"/>
           <div className="auth-cont">  Self Hosted GitLab</div>
             </div>
            <div className="auth-butn"> 
            <img src={key} alt = "sos"/> 
           <div className="auth-cont"> Sign in with SSO</div>
            </div>
            
         </div>
           </div>
        )}
      </div>
    
    </div>
  );
};

export default Welcome;
