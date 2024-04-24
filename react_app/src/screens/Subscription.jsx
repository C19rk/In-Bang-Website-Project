import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic from "../images/subscription.jpg";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "../screens/mediaqueries.css";

function Subscription() {
  const userLogin = useSelector((state) => state.userLogin);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
      onClick={() => setSelectedPlan(null)}
    >
      <div
        className="container"
        style={{
          content: "",
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <div>
        <p
          style={{
            color: "#fc033d",
            position: "absolute",
            top: "-30vh",
            right: "5vh",
            textAlign: "justify",
            fontSize: "2.4vw",
            fontWeight: "bold",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          Choose your stated plan
        </p>
        <p
          style={{
            color: "#fce703",
            position: "absolute",
            top: "14vh",
            right: "5vh",
            textAlign: "right",
            fontSize: "1.4vw",
            fontWeight: "bold",
          }}
        >
          Ad free.
          <br />
          Change or cancel plans anytime.
        </p>
        <table
          style={{
            marginTop: "28vh",
            backgroundColor: "#1200b8",
            marginBottom: "1vh",
            color: "#ffffff",
            width: "1vw", // Set the width of the table
            height: "1vh", // Set the height of the table to auto for dynamic height
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <tbody style={{ position: "relative" }}>
            <tr>
              <td style={{ padding: "1vw", textAlign: "center" }}></td>{" "}
              {/* Reduced padding */}
              <td style={{ padding: "1vw", textAlign: "center" }}>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedPlan === "Standard" ? "#b700ff" : "#3700ff",
                    color: "#ffffff",
                    border: "none",
                    marginTop: "3vw",
                    fontSize: "2vw",
                    padding: "1vw 2vw",
                    fontWeight: "bolder",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan("Standard");
                  }}
                >
                  Standard
                </button>
              </td>
              <td style={{ padding: "1vw", textAlign: "center" }}>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedPlan === "Premium" ? "#b700ff" : "#3700ff",
                    color: "#ffffff",
                    border: "none",
                    marginTop: "3vw",
                    fontSize: "2vw",
                    padding: "1vw 2vw",
                    fontWeight: "bolder",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan("Premium");
                  }}
                >
                  Premium
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "2vw", textAlign: "center" }}>
                Monthly Price
              </td>
              <td style={{ padding: "2vw", textAlign: "center" }}>₱250</td>
              <td style={{ padding: "2vw", textAlign: "center" }}>₱530</td>
            </tr>
            <tr>
              <td style={{ padding: "2vw", textAlign: "center" }}>
                Video Quality
              </td>
              <td style={{ padding: "2vw", textAlign: "center" }}>HD</td>
              <td style={{ padding: "2vw", textAlign: "center" }}>Ultra HD</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
          }}
        >
          <Link
            to="/dashboard"
            style={{
              position: "absolute",
              textDecoration: "none",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "2vh solid rgba(252, 32, 3, 1)",
                backgroundColor: "rgba(252, 32, 3, 1)",
                borderRadius: "1vh",
                color: "#ffffff",
                padding: "1vh",
                fontWeight: "bolder",
                fontSize: "3vh",
              }}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
