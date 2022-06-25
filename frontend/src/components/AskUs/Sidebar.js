import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import StarsIcon from "@material-ui/icons/Stars";
import WorkIcon from "@material-ui/icons/Work";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link to="/">Home</Link>

            {/* <a href="/">Home</a> */}
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <Link to="/">Question</Link>

                {/* <a href="/">Question</a> */}
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <StarsIcon />
                <Link to="/">Explore Collectives</Link>

                {/* <a href="/">Explore Collectives</a> */}
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>World Technology</p>
            <div className="link">
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/tech"
              >
                Cyber Security
              </Link>
              {/* <a
                style={{
                  margin: "10px 20px",
                }}
                href="/"
              >
                Jobs
              </a> */}
              {/* <a
                style={{
                  marginLeft: "20px",
                }}
                href="/"
              >
                Companies
              </a> */}
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/tech"
              >
                Edge Computing
              </Link>
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Machine Learning
              </Link>
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Artificial Intelligence
              </Link>
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Predictive Analytics
              </Link>
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Software Development
              </Link>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <WorkIcon />
              <Link to="/">Community</Link>
              {/* <a href="/">Companies</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
