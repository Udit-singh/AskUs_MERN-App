import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
// import Avatar from "@mui/material/Avatar";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import "./index.css";

  
  
export default function JumbotronContainer() {
  return (
    <div className="jumbotron-main">
      <h2>Search</h2>
      <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
          <p className="example">Example: Android error, flutter data not fetching etc.</p>
        </div>
    </div>
    
  );
}