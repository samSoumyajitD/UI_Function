import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Repositories");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="comp-brand">
        <div className="sidebar-logo-container">
          <img src={logo} alt="CodeAnt AI Logo" className="sidebar-logo" />
          <div className="comp-name">CodeAnt AI</div>
          </div>
          <div>
             <button className="hamburger" onClick={toggleSidebar}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
         </div>
        </div>
       
      
      </div>
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <nav className={`sidebar-nav ${isSidebarOpen ? "open" : ""}`}>
      <select className="sidebar-dropdown">
          <option>UtkarshDhairya</option>
        </select>
        <Link
          to="repositories"
          className={`sidebar-link ${activeLink === "Repositories" ? "active" : ""}`}
          onClick={() => handleLinkClick("Repositories")}
        >
          <HomeOutlinedIcon className="icon" /> Repositories
        </Link>
        <Link
          to="coming-soon"
          className={`sidebar-link ${activeLink === "AI Code Review" ? "active" : ""}`}
          onClick={() => handleLinkClick("AI Code Review")}
        >
          <CodeOffOutlinedIcon className="icon" /> AI Code Review
        </Link>
        <Link
          to="coming-soon"
          className={`sidebar-link ${activeLink === "Cloud Security" ? "active" : ""}`}
          onClick={() => handleLinkClick("Cloud Security")}
        >
          <CloudOutlinedIcon className="icon" /> Cloud Security
        </Link>
        <Link
          to="coming-soon"
          className={`sidebar-link ${activeLink === "How to Use" ? "active" : ""}`}
          onClick={() => handleLinkClick("How to Use")}
        >
          <LibraryBooksOutlinedIcon className="icon" /> How to Use
        </Link>
        <Link
          to="coming-soon"
          className={`sidebar-link ${activeLink === "Settings" ? "active" : ""}`}
          onClick={() => handleLinkClick("Settings")}
        >
          <SettingsOutlinedIcon className="icon" /> Settings
        </Link>
        <Link
          to="coming-soon"
          className={`sidebar-link1 sidebar-link ${activeLink === "Support" ? "active" : ""}`}
          onClick={() => handleLinkClick("Support")}
        >
          <PhoneOutlinedIcon className="icon" /> Support
        </Link>
        <Link
          to="/auth"     
          className={`sidebar-link1 sidebar-link ${activeLink === "Logout" ? "active" : ""}`}
          onClick={() => handleLinkClick("Logout")}
        >
          <LogoutOutlinedIcon className="icon" /> Logout
        </Link>
      </nav>
      <div className="sidebar-footer">
        <Link
          to="coming-soon"
          className={`sidebar-link ${activeLink === "Support" ? "active" : ""}`}
          onClick={() => handleLinkClick("Support")}
        >
          <PhoneOutlinedIcon className="icon" /> Support
        </Link>
        <Link
          to="/auth"     
          className={`sidebar-link ${activeLink === "Logout" ? "active" : ""}`}
          onClick={() => handleLinkClick("Logout")}
        >
          <LogoutOutlinedIcon className="icon" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
