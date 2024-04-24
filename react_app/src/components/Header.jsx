import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import pic from "../images/dashicon.png";
import pic1 from "../images/searchicon.png";
import userIcon from "../images/usericon.png";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false); // State to control button visibility
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleUserSettings = () => {
    navigate("/user-settings");
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons); // Toggle button visibility
  };

  const isDashboard = location.pathname === "/dashboard"; // Check if current location is /dashboard

  const headerStyle = {
    alignItems: "center",
    position: "fixed", // Set position to fixed
    top: "0", // Position at the top of the viewport
    width: "100%", // Take up the full width
    backgroundColor: "#000000",
    borderBottom: "0.3vh solid #ff2937",
    padding: "2vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "center",
    zIndex: "2", // Ensure it's above other elements
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: "0vh",
  };

  const imgStyle = {
    height: "25vh",
    marginTop: "-5vh",
  };

  const moviesStyle = {
    margin: "0",
  };

  const linkContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "0vh", // Move them on the left!
  };

  const linkStyle = {
    marginTop: "-5vh",
    marginLeft: "3vh",
    marginRight: "3vh",
    cursor: "pointer",
    fontSize: "3vh",
    backgroundColor: "transparent",
    border: "transparent",
    color: "#ff001e",
  };

  const profileContainerStyle = {
    position: "absolute",
    top: "2.4vh",
    right: "7vh",
  };

  const usernameStyle = {
    color: "#ffffff",
    marginRight: "1.5vh", // Adjust margin as needed
  };

  const buttonStyle = {
    width: "5vw", // Fixed width for buttons
    marginRight: "1vh",
    marginBottom: "1vh", // Adjust margin as needed
    padding: "1vh",
    cursor: "pointer",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "1vh",
    border: "0.2vh solid #000000",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <img src={pic} alt="dashicon" style={imgStyle} />
      </div>
      <div></div>
      <div style={linkContainerStyle}>
        <Link to="/movies">
          <button style={linkStyle}>Movies</button>
        </Link>
        <Link to="/tv-shows">
          <button style={linkStyle}>Short Films/TV Shows</button>
        </Link>
        <Link to="/genre">
          <button style={linkStyle}>Genre</button>
        </Link>
        {!isDashboard && ( // Conditionally render only if not in /dashboard
          <Link to="/dashboard" className="link">
            <button className="linkButton" style={linkStyle}>
              Return to Dashboard
            </button>
          </Link>
        )}
      </div>
      {userInfo ? (
        <div style={profileContainerStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={usernameStyle}>{userInfo.username}</p>
            <img
              src={userIcon}
              alt="user icon"
              style={{
                cursor: "pointer",
                width: "3.2vw",
                padding: "0.01vh",
                border: "0.35vh solid #555555",
                borderRadius: "50%",
              }}
              onClick={toggleButtons}
            />
          </div>
          {showButtons && (
            <div style={{ position: "absolute", top: "10vh", right: "-2.5vh" }}>
              <button style={buttonStyle} onClick={handleUserSettings}>
                Settings
              </button>
              <br /> {/* Line break */}
              <button style={buttonStyle} onClick={logoutHandler}>
                Logout
              </button>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
