import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";  // Importing the CSS file for styling the sidebar
import logo from "../assets/logo.png";  // Importing the logo image
import MenuIcon from "@mui/icons-material/Menu";  // Menu icon for mobile view
import CloseIcon from "@mui/icons-material/Close";  // Close icon for mobile view
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";  // Home icon for repositories link
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";  // Cloud icon for cloud security link
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";  // Settings icon for settings link
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";  // Phone icon for support link
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";  // CodeOff icon for AI code review link
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";  // Logout icon for logout link
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";  // LibraryBooks icon for how to use link

const Sidebar = () => {
  // State to track the currently active link
  const [activeLink, setActiveLink] = useState("Repositories");

  // State to manage the sidebar visibility (for mobile view)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to set the active link when a link is clicked
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  // Function to toggle the sidebar open or close
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="comp-brand">
          <div className="sidebar-logo-container">
            <img src={logo} alt="CodeAnt AI Logo" className="sidebar-logo" /> {/* Logo */}
            <div className="comp-name">CodeAnt AI</div> {/* Company Name */}
          </div>

          {/* Hamburger icon to toggle sidebar visibility */}
          <div>
            <button className="hamburger" onClick={toggleSidebar}>
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />} {/* Show close icon if open, else show menu */}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close the sidebar when clicked outside */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar navigation links */}
      <nav className={`sidebar-nav ${isSidebarOpen ? "open" : ""}`}>
        {/* Dropdown for user profile (not functional here) */}
        <select className="sidebar-dropdown">
          <option>UtkarshDhairya</option>
        </select>

        {/* Navigation Links */}
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
          to="/auth"  // Link for logging out (redirect to authentication page)
          className={`sidebar-link1 sidebar-link ${activeLink === "Logout" ? "active" : ""}`}
          onClick={() => handleLinkClick("Logout")}
        >
          <LogoutOutlinedIcon className="icon" /> Logout
        </Link>
      </nav>

      {/* Footer of the sidebar with extra links */}
      <div className="sidebar-footer">
        <Link
          to="coming-soon"
          className={`sidebar-link ${activeLink === "Support" ? "active" : ""}`}
          onClick={() => handleLinkClick("Support")}
        >
          <PhoneOutlinedIcon className="icon" /> Support
        </Link>
        <Link
          to="/auth"  // Link for logging out (redirect to authentication page)
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
