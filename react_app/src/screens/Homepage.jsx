import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import FooterTransparent from "../components/FooterTransparent";
import pic from "../images/homepage.jpg";
import "./mediaqueries.css";

function Homepage() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container">
      <FooterTransparent />
      <div
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
          }}
        />
        <NavLink to="/login">
          <button
            style={{
              position: "fixed",
              top: "5vh",
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
            Login
          </button>
        </NavLink>
        <div
          style={{
            position: "fixed",
            bottom: "15vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2vh",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              width: "50vw",
              border: "transparent",
              backgroundColor: "rgba(255, 0, 38, 0.4)",
              borderRadius: "1vh",
              padding: "2vh",
              textAlign: "center",
              fontSize: "3vh",
            }}
          >
            Are you ready to watch exciting movies? Click the box below to get
            you started!
          </p>
          <Link to="/registration">
            <button
              style={{
                cursor: "pointer",
                border: "1vh solid rgba(18, 0, 184, 1)",
                backgroundColor: "rgba(18, 0, 184, 1)",
                borderRadius: "1vh",
                color: "#ffffff",
                padding: "2vh 3vw",
                fontSize: "3vh",
                fontWeight: "bolder",
                marginTop: "2vh",
              }}
            >
              Get Started →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
