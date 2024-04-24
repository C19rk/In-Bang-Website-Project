import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer.jsx";
import "./InvisiScroll.css";
import pic from "../images/homepage.jpg";
import "../screens/mediaqueries.css";

function Contact() {
  useEffect(() => {
    return () => {};
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the browser history
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    // Show message for a short duration before redirecting
    if (userInfo) {
      setShowMessage(true); // Show the message
    }
  }, [userInfo, navigate]);

  const linkStyle = {
    position: "fixed",
    top: "2vh",
    right: "15vh",
    cursor: "pointer",
    fontSize: "4.4vh",
    fontWeight: "bolder",
    backgroundColor: "#ffe600",
    border: "0.4vh solid #fff380",
    borderRadius: "1vh",
    color: "#000000",
  };

  return (
    <div className="card-container">
      <Footer />
      {userInfo && (
        <React.Fragment>
          <button style={linkStyle} onClick={() => navigate("/dashboard")}>
            Return to Dashboard
          </button>
        </React.Fragment>
      )}
      {!userInfo && (
        <React.Fragment>
          <button style={linkStyle} onClick={() => navigate("/")}>
            Return to Home
          </button>
        </React.Fragment>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          padding: "2vh",
        }}
      >
        <div
          style={{
            border: "2vh solid #ccc",
            padding: "2vh",
            textAlign: "center",
          }}
        >
          {/* 서비스 이용 약관 텍스트 */}
          <h1>Contact Sales</h1>
          <p>
            If you want to send us a business mail, send us an e-mail:
            sales@inbang.com
          </p>
          <h1>Report Error</h1>
          <p>
            If you want to report an error, or if you want to make a suggestion,
            send us an e-mail: help@inbang.com
          </p>

          {/* 약관의 나머지 내용 */}
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
      </div>
    </div>
  );
}

export default Contact;
