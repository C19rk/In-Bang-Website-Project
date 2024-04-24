import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer.jsx";
import "./InvisiScroll.css";
import pic from "../images/homepage.jpg";
import "../screens/mediaqueries.css";

function PrivacyPolicy() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the browser history
  };

  useEffect(() => {
    return () => {};
  }, []);

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
          margin: "6vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
        }}
      >
        <h1 style={{ textAlign: "justify" }}>
          Is your information safe with InBang?
        </h1>
        <p style={{ textAlign: "justify" }}>
          We are committed to providing you with a wonderful customer
          experience. We know how important your personal data is to you, and we
          want you to know that you can trust us to protect it. In this Privacy
          Policy, you will understand how we collect, use, and share your
          personal data when you use our products and services. As you read
          through this Privacy Policy, bear in mind that it applies to all our
          brands, products, and services that do not have their own privacy
          policies or that link to this Privacy Policy. We recommend that you
          review this Privacy Policy regularly as this is subject to change to
          reflect updates to relevant laws and regulations as well as our
          policies. This Privacy Policy was last updated on 17 May 2023.
        </p>
        <br />
        <br />
        <div>
          <p
            style={{
              color: "#ffffff",
              width: "50vw",
              border: "transparent",
              borderRadius: "1vh",
              padding: "2vh",
              fontSize: "3vh",
              margin: "0 auto", // Center the paragraph horizontally
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              COLLECTION AND USE OF PERSONAL DATA
            </h2>
            <p>
              Throughout our relationship with you, we collect and use your
              personal data to allow us to continuously provide you with our
              products and services. When we do so, we will let you know exactly
              what personal data we are collecting, why, and what criteria under
              the law we rely on. We collect cookies, web beacons, small data
              text files, or similar technologies primarily to ensure that the
              core functions of our website and apps are optimally accessible to
              you. However, depending on your preferences, we may also collect
              and use this information for behavioral analytics to personalize
              our marketing campaigns. For more information, please see our
              Terms of Service.
            </p>
            <br />
            <h2 style={{ textAlign: "center" }}>SHARING OF PERSONAL DATA</h2>
            <p>
              We may outsource the processing of your personal data to external
              parties including vendors, service providers, and other
              telecommunications operators who may process your personal data
              outside the Philippines to fulfill the purposes described in this
              Privacy Policy. When we do so, we make sure they can only process
              your personal data strictly for the purpose stated in our contract
              with them. We also require them to protect your personal data with
              organizational, physical, and technical security measures
              consistent with our internal policies and ensure they return or
              dispose of your personal data upon the end of our engagement or as
              otherwise specified in our contract. With your consent, we will
              share your personal data with the Globe Group Portfolio Companies
              and with our Partners for credit and telco scoring, business
              analytics, and product development purposes as well as to allow
              them to market and extend their products and services to you. It
              is our policy to never share your personal data with external
              parties unless we obtain your consent or are otherwise required or
              allowed by law to do so. To choose who you want us to share your
              personal data with to get access to new digital, financial, and
              medical services, you may update your consent preferences in the
              Privacy Dashboard of the New InBang App.
            </p>
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
      </div>
    </div>
  );
}

export default PrivacyPolicy;
