import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../screens/mediaqueries.css";

export default function FooterDash() {
  return (
    <div
      className="container"
      style={{
        padding: "5vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
    >
      {/* About Us Button */}
      <div
        style={{
          position: "fixed",
          bottom: "3vh",
          right: "86vh",
          zIndex: 2,
        }}
      >
        <Link to="/about-us">
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              color: "#000000",
              fontSize: "3vh",
              marginTop: "2vh",
              fontWeight: "bold",
            }}
          >
            About Us
          </button>
        </Link>
      </div>

      {/* Contact Button */}
      <div
        style={{
          position: "fixed",
          bottom: "3vh",
          right: "66vh",
          zIndex: 2,
        }}
      >
        <Link to="/contact">
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              color: "#000000",
              fontSize: "3vh",
              marginTop: "2vh",
              fontWeight: "bold",
            }}
          >
            Contact
          </button>
        </Link>
      </div>

      {/* Terms of Service Button */}
      <div
        style={{
          position: "fixed",
          bottom: "3vh",
          right: "33vh",
          zIndex: 2,
        }}
      >
        <Link to="/terms-of-service">
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              color: "#000000",
              fontSize: "3vh",
              marginTop: "2vh",
              fontWeight: "bold",
            }}
          >
            Terms of Service
          </button>
        </Link>
      </div>

      {/* Privacy Policy Button */}
      <div
        style={{
          position: "fixed",
          bottom: "3vh",
          right: "3vh",
          zIndex: 2,
        }}
      >
        <Link to="/privacy-policy">
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              color: "#000000",
              fontSize: "3vh",
              marginTop: "2vh",
              fontWeight: "bold",
            }}
          >
            Privacy Policy
          </button>
        </Link>
      </div>
    </div>
  );
}
