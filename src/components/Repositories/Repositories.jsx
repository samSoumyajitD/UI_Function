import React from "react"; 
import "./Repositories.css"; // Importing custom CSS styles
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"; // Importing the refresh icon
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"; // Importing the add repository icon
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"; // Importing the storage icon
import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon
import TextField from "@mui/material/TextField"; // Importing Material UI TextField component for search input
import InputAdornment from "@mui/material/InputAdornment"; // Importing InputAdornment for placing icons inside the input field
import CircleIcon from "@mui/icons-material/Circle"; // Importing Circle icon to display status indicator

// Mock data for repositories
const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updated: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    updated: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updated: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updated: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updated: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
  },
];

// Getting the length of the repositories array to display total number of repositories
const repositoriesLength = repositories.length;

const Repositories = () => {
  return (
    <div className="repo"> {/* Main container for the repositories */}
      <div className="repo-body"> {/* Body section containing all repository details */}
      
        <div className="repo-head"> {/* Header section for title and action buttons */}
    
          <div>
            <h2>Repositories</h2> {/* Title of the repositories section */}
            <p>{repositoriesLength} total repositories</p> {/* Displaying the total number of repositories */}
          </div>
         
          <div className="repo-head-buttons"> {/* Container for the action buttons */}
            <button className="refresh-btn">
              <AutorenewOutlinedIcon style={{ fontSize: "20px" }} /> Refresh
              All {/* Button to refresh repositories */}
            </button>
            <button className="add-btn">
              <AddOutlinedIcon style={{ fontSize: "20px" }} /> Add Repository {/* Button to add a new repository */}
            </button>
          </div>
          
        </div>

        <div className="repo-search"> {/* Search bar to filter repositories */}
          <TextField
            className="search-repo"
            variant="outlined"
            placeholder="Search Repositories" // Placeholder text for the search input
            size="small"
            sx={{
              borderRadius: "6px",
              backgroundColor: "#ffffff",
              "& .MuiOutlinedInput-root": {
                borderRadius: "6px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#999" }} /> {/* Search icon inside the input field */}
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="repositories-list"> {/* Container for displaying the list of repositories */}
          {repositories.map((repo, index) => (
            <div className="repository-card" key={index}> {/* Card for each repository */}
              
              <div className="repository-header"> {/* Header of the repository card */}
                <h2 className="repository-title">{repo.name}</h2> {/* Repository name */}
                <span className="repository-tag">{repo.visibility}</span> {/* Repository visibility (public/private) */}
              </div>

              <div className="repository-details"> {/* Details of the repository */}
                <span>{repo.language}</span> {/* Programming language used in the repository */}
                <CircleIcon className="dot-icon" style={{ fontSize: '6px' }} /> {/* Status indicator icon */}
                <div className="repository-size">
                  <StorageOutlinedIcon className="file-icon" style={{ fontSize: '16px' }} /> {/* File size icon */}
                  <span>{repo.size}</span> {/* Repository size */}
                </div>
                <div className="repository-size">
                  <span>Updated {repo.updated}</span> {/* Last updated time */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories; // Exporting the component for use in other parts of the application
