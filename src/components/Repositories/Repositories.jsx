import React from "react";
import "./Repositories.css";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CircleIcon from "@mui/icons-material/Circle";

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

const repositoriesLength = repositories.length;

const Repositories = () => {
  return (
    <div className="repo">
      <div className="repo-body">
      
        <div className="repo-head">
    
          <div>
            <h2>Repositories</h2>
            <p>{repositoriesLength} total repositories</p>
          
          </div>
         
          <div className="repo-head-buttons">
            <button className="refresh-btn">
              <AutorenewOutlinedIcon style={{ fontSize: "20px" }} /> Refresh
              All
            </button>
            <button className="add-btn">
              <AddOutlinedIcon style={{ fontSize: "20px" }} /> Add Repository
            </button>
          </div>
          
        </div>
        <div className="repo-search">
        <TextField
        className="search-repo"
              variant="outlined"
              placeholder="Search Repositories"
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
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
            />
            </div>
        <div className="repositories-list">
          {repositories.map((repo, index) => (
            <div className="repository-card" key={index}>
              
              <div className="repository-header">
                <h2 className="repository-title">{repo.name}</h2>
                <span className="repository-tag">{repo.visibility}</span>
              </div>
              <div className="repository-details">
                <span>{repo.language}</span>
                <CircleIcon className="dot-icon" style={{ fontSize: '6px' }}/>
                <div className="repository-size">
                  <StorageOutlinedIcon className="file-icon"style={{ fontSize: '16px' }} />
                  <span>{repo.size}</span>
                </div>
                <div className="repository-size">
                <span>Updated {repo.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;