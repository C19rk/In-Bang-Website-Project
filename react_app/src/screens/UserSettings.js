import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUserSettings } from "../actions/userActions";
import axios from "axios";
import pic from "../images/usersettings.jpg";
import pic1 from "../images/usericon.png";
import "./mediaqueries.css";

function UserSettings() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false); // State to control settings button visibility
  const [showPlans, setShowPlans] = useState(false); // State to control plans button visibility
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [isEditing, setIsEditing] = useState(false); // State to control edit mode

  const [newUsername, setNewUsername] = useState(
    userInfo ? userInfo.username : ""
  );
  const [newEmail, setNewEmail] = useState(userInfo ? userInfo.email : "");
  const [newFirstName, setNewFirstName] = useState(
    userInfo ? userInfo.first_name : ""
  );
  const [newLastName, setNewLastName] = useState(
    userInfo ? userInfo.last_name : ""
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showNewUsername, setShowNewUsername] = useState(false);
  const [showNewEmail, setShowNewEmail] = useState(false);
  const [showNewFirstName, setShowNewFirstName] = useState(false);
  const [showNewLastName, setShowNewLastName] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [PasswordError, setPasswordError] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showButtons, setShowButtons] = useState(false); // State to control button visibility

  const userSettings = useSelector((state) => state.userSettings);
  const { error, loading } = userSettings || {};

  useEffect(() => {
    // Show message for a short duration before redirecting
    if (!userInfo) {
      setShowMessage(true); // Show the message
      const timer = setTimeout(() => {
        navigate("/login"); // Redirect to login after a delay
      }, 2000); // Delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError(""); // Resets password error message

    const userData = {
      username: newUsername,
      email: newEmail,
      first_name: newFirstName,
      last_name: newLastName,
      old_password: oldPassword || userInfo.password,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    try {
      const response = await axios.patch("/api/user-settings/", userData, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      dispatch(logout());
      localStorage.removeItem("user");
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setPasswordError(error.response.data.message);
      } else if (newPassword !== confirmPassword) {
        setPasswordError("Passwords do not match.");
      } else {
        setPasswordError("Old password is incorrect!");
      }
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login after logout
  };

  const buttonStyle = {
    width: "5vw", // Fixed width for buttons
    marginRight: "1vh",
    marginBottom: "1vh", // Adjust margin as needed
    padding: "1vh",
    cursor: "pointer",
    backgroundColor: "red",
    color: "#ffffff",
    borderRadius: "1vh",
    border: "0.2vh solid #000000",
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the browser history
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings); // Toggle settings button visibility
    setShowPlans(false); // Hide plans button when settings button is clicked
    setIsEditing(false); // Disable edit mode when toggling settings
  };

  const handleInputClick = (e) => {
    // Prevent event propagation to prevent toggling the settings box
    e.stopPropagation();
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable edit mode
  };

  const togglePlans = () => {
    setShowPlans(!showPlans); // Toggle plans button visibility
    setShowSettings(false); // Hide settings button when plans button is clicked
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons); // Toggle button visibility
  };

  const errormsg = {
    color: "#ff0000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Set height to full viewport height
    fontSize: "35vh",
    fontWeight: "bolder",
  };

  // If user is not logged in, only show the "Login first!" message
  if (!userInfo) {
    return <div style={errormsg}>Login first!</div>;
  }

  return (
    <div
      className="container"
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      {/* User Information box */}
      <div
        style={{
          position: "fixed",
          top: "4vh",
          left: "25vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2vh",
          boxSizing: "border-box",
          zIndex: 1, // Ensure it's above the overlay
        }}
      >
        {/* Edit width of box here */}
        <p
          style={{
            color: "#ffffff",
            width: "70vw",
            backgroundColor: "rgba(0, 0, 38, 0.7)",
            borderRadius: "1vh",
            padding: "2vh",
            textAlign: "center",
            fontSize: "3vh",
            fontWeight: "bolder",
          }}
        >
          User Information
        </p>
      </div>
      {/* Back Button */}
      <button
        onClick={handleGoBack}
        style={{
          position: "fixed",
          top: "2vh",
          right: "2vw",
          cursor: "pointer",
          border: "0.4vh solid rgba(18, 0, 184, 1)",
          backgroundColor: "rgba(18, 0, 134, 1)",
          borderRadius: "1vh",
          color: "#ffffff",
          padding: "0.01vh 1vw",
          fontSize: "4.5vh",
          fontWeight: "bolder",
          transform: "scaleY(-1)",
          zIndex: 3,
        }}
      >
        ↩
      </button>
      {/* Box */}
      <div
        style={{
          position: "fixed",
          top: "14vh",
          left: "25vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2vh",
          boxSizing: "border-box",
          zIndex: 1, // Ensure it's above the overlay
        }}
      >
        {/* Edit width of box here */}
        <p
          style={{
            color: "#ffffff",
            width: "70vw",
            height: "71.9vh", //Prevents box from extending when a different content appears
            backgroundColor: "rgba(0, 0, 38, 0.7)",
            borderRadius: "1vh",
            padding: "2vh",
            textAlign: "center",
            fontSize: "3vh",
          }}
        >
          {showSettings && (
            <div>
              {isEditing ? (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    color: "#ffffff",
                    position: "fixed",
                    top: "22.5vh",
                    left: "63vh",
                    width: "24vw",
                    textAlign: "left",
                    fontSize: "2.5vh",
                  }}
                >
                  {PasswordError && (
                    <div style={{ color: "red" }}>{PasswordError}</div>
                  )}
                  {message && <div style={{ color: "red" }}>{message}</div>}

                  <label>
                    First Name:
                    <input
                      type="text"
                      name="first_name"
                      value={newFirstName}
                      required
                      onChange={(e) => setNewFirstName(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="last_name"
                      value={newLastName}
                      required
                      onChange={(e) => setNewLastName(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={newUsername}
                      required
                      onChange={(e) => setNewUsername(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    Email:
                    <input
                      type="text"
                      name="email"
                      value={newEmail}
                      required
                      onChange={(e) => setNewEmail(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    Old Password:
                    <input
                      type="password"
                      name="old_password"
                      value={oldPassword}
                      required
                      onChange={(e) => setOldPassword(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    New Password:
                    <input
                      type="password"
                      name="new_password"
                      value={newPassword}
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    Confirm Password:
                    <input
                      type="password"
                      name="confirm_password"
                      value={confirmPassword}
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onClick={handleInputClick}
                      style={{
                        backgroundColor: "#1200b8",
                        color: "#ffe600",
                        border: "transparent",
                        borderRadius: "0.5vh",
                        padding: "0.2vh",
                        width: "100%",
                      }}
                    />
                  </label>
                  <button
                    type="submit"
                    style={{
                      position: "fixed",
                      top: "24.5vh",
                      right: "5vw",
                      cursor: "pointer",
                      border: "0.7vh solid rgba(18, 0, 184, 1)",
                      backgroundColor: "rgba(18, 0, 184, 1)",
                      borderRadius: "1vh",
                      color: "#ffffff",
                      padding: "2vh 3vw",
                      fontSize: "3vh",
                      fontWeight: "bolder",
                    }}
                  >
                    Save Changes
                  </button>
                  <button
                    style={{
                      position: "fixed",
                      top: "34.5vh",
                      right: "5vw",
                      cursor: "pointer",
                      border: "0.7vh solid rgba(18, 0, 184, 1)",
                      backgroundColor: "rgba(18, 0, 184, 1)",
                      borderRadius: "1vh",
                      color: "#ffffff",
                      padding: "2vh 3vw",
                      fontSize: "3vh",
                      fontWeight: "bolder",
                    }}
                    onClick={() => {
                      // Reset local state to initial values
                      setNewUsername(userInfo ? userInfo.username : "");
                      setNewEmail(userInfo ? userInfo.email : "");
                      setNewFirstName(userInfo ? userInfo.first_name : "");
                      setNewLastName(userInfo ? userInfo.last_name : "");
                      setOldPassword("");
                      setNewPassword("");
                      setConfirmPassword("");
                      setIsEditing(false); // Exit editing mode
                    }}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <p
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      position: "absolute",
                      top: "3vh",
                      left: "38vh",
                      width: "500vw",
                      textAlign: "left",
                      fontSize: "7vh",
                    }}
                  >
                    <span style={{ marginRight: "10vh" }}>First Name</span>
                    <div
                      style={{
                        color: "#ffe600",
                      }}
                    >
                      {newFirstName}
                    </div>
                  </p>
                  <br />
                  <p
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      position: "absolute",
                      top: "20vh",
                      left: "38vh",
                      width: "500vw",
                      textAlign: "left",
                      fontSize: "7vh",
                    }}
                  >
                    <span style={{ marginRight: "10.9vh" }}>Last Name</span>
                    <div
                      style={{
                        color: "#ffe600",
                      }}
                    >
                      {newLastName}
                    </div>
                  </p>
                  <br />
                  <p
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      position: "absolute",
                      top: "39vh",
                      left: "38vh",
                      width: "500vw",
                      textAlign: "left",
                      fontSize: "7vh",
                    }}
                  >
                    <span style={{ marginRight: "12.5vh" }}>Username</span>
                    <div
                      style={{
                        color: "#ffe600",
                      }}
                    >
                      {newUsername}
                    </div>
                  </p>
                  <br />
                  <p
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      position: "absolute",
                      top: "58vh",
                      left: "38vh",
                      width: "500vw",
                      textAlign: "left",
                      fontSize: "7vh",
                    }}
                  >
                    <span style={{ marginRight: "27vh" }}>Email</span>
                    <div
                      style={{
                        color: "#ffe600",
                      }}
                    >
                      {newEmail}
                    </div>
                  </p>
                  <button
                    style={{
                      position: "fixed",
                      top: "24.5vh",
                      right: "5vw",
                      cursor: "pointer",
                      border: "0.7vh solid rgba(18, 0, 184, 1)",
                      backgroundColor: "rgba(18, 0, 184, 1)",
                      borderRadius: "1vh",
                      color: "#ffffff",
                      padding: "2vh 3vw",
                      fontSize: "3vh",
                      fontWeight: "bolder",
                    }}
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          )}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
      {/* Profile Pic */}
      <div
        style={{
          position: "fixed",
          top: "29vh",
          left: "3vh",
          backgroundColor: "rgba(0, 0, 38, 0.7)",
          color: "#ffffff",
          borderRadius: "1vh",
          padding: "2vh 4vw",
          textAlign: "center",
          width: "15vw",
          height: "26vh",
        }}
      ></div>
      <div>
        {userInfo && (
          <div>
            <div
              style={{
                position: "fixed",
                top: "29vh",
                left: "3vh",
                borderRadius: "1vh",
                padding: "2vh 4vw",
                textAlign: "center",
                width: "15vw",
                height: "26vh",
                zIndex: 2,
              }}
            >
              <img
                src={pic1}
                alt="user icon"
                style={{
                  cursor: "pointer",
                  width: "5vw",
                  padding: "0.01vh",
                  border: "0.5vh solid #555555",
                  borderRadius: "50%",
                }}
                onClick={toggleButtons}
              />
              <p style={{ color: "#ffffff", fontSize: "3vh" }}>
                {userInfo.username}
                <br />
                {userInfo.email}
              </p>
            </div>
          </div>
        )}
      </div>
      {showButtons && (
        <div style={{ position: "absolute", top: "31vh", left: "43vh" }}>
          <button style={buttonStyle} onClick={logoutHandler}>
            Logout
          </button>
          <br /> {/* Line break */}
        </div>
      )}
      {/* User Settings box */}
      <div
        style={{
          position: "fixed",
          top: "59vh",
          left: "1vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2vh",
          boxSizing: "border-box",
          zIndex: 1, // Ensure it's above the overlay
        }}
        onClick={toggleSettings}
      >
        {/* Edit width of box here */}
        <button
          style={{
            color: "#ffffff",
            width: "23vw",
            backgroundColor: "rgba(0, 0, 38, 0.7)",
            border: "transparent",
            borderRadius: "1vh",
            textAlign: "center",
            fontSize: "3vh",
            fontWeight: "bolder",
            cursor: "pointer",
            padding: "3.5vh",
          }}
        >
          Settings
        </button>
      </div>
      {/* User Plan box */}
      <div
        style={{
          position: "fixed",
          top: "70.4vh",
          left: "1vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2vh",
          boxSizing: "border-box",
          zIndex: 1, // Ensure it's above the overlay
        }}
      >
        {/* Edit width of box here */}
        <button
          style={{
            color: "#ffffff",
            width: "23vw",
            backgroundColor: "rgba(0, 0, 38, 0.7)",
            border: "transparent",
            borderRadius: "1vh",
            textAlign: "center",
            fontSize: "3vh",
            fontWeight: "bolder",
            cursor: "pointer",
            padding: "3.5vh",
          }}
          onClick={togglePlans}
        >
          My Plans and Bills
        </button>
        {showPlans && (
          <div style={{ position: "absolute", top: "60px", right: "-15px" }}>
            <button>Settings</button>
            <br /> {/* Line break */}
            <button onClick={logoutHandler}>Logout</button>
          </div>
        )}
      </div>
      {/* User Logout box */}
      <div
        style={{
          position: "fixed",
          top: "82.2vh",
          left: "1vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2vh",
          boxSizing: "border-box",
          zIndex: 1, // Ensure it's above the overlay
        }}
      >
        {/* Edit width of box here */}
        <button
          onClick={logoutHandler}
          style={{
            color: "#ffffff",
            width: "23vw",
            backgroundColor: "rgba(0, 0, 38, 0.7)",
            border: "transparent",
            borderRadius: "1vh",
            textAlign: "center",
            fontSize: "3vh",
            fontWeight: "bolder",
            cursor: "pointer",
            padding: "3.5vh",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default UserSettings;
