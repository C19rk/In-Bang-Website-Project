import React, { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
  redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import "../styles.css";
import pic from "../images/login.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./mediaqueries.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/subscription";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  let navigate = useNavigate();
  const dispatch = useDispatch();

  // Inside the Login component
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div
      className="container"
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          width: "300px",
          border: "2px solid rgba(18, 0, 184, 1)",
          backgroundColor: "rgba(18, 0, 184, 1)",
          borderRadius: "24px",
          color: "#ffffff",
          padding: "20px",
          position: "relative", // Added position relative
        }}
      >
        <Link
          to="/"
          style={{
            position: "absolute",
            top: "10px", // Adjusted top position
            right: "10px", // Adjusted right position
            textDecoration: "none",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "2px solid rgba(252, 32, 3, 1)",
              backgroundColor: "rgba(252, 32, 3, 1)",
              borderRadius: "24px",
              color: "#000000",
              padding: "5px",
            }}
          >
            X
          </button>
        </Link>
        <p
          style={{
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          Welcome!
        </p>
        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Incorrect username or password!
          </p>
        )}
        <form onSubmit={submitHandler}>
          <div
            style={{
              display: "flex",
              color: "#000000",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Username:</label>
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#000000",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Password:</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
              style={{
                cursor: "pointer",
                border: "2px solid rgba(0, 0, 0, 1)",
                backgroundColor: "rgba(0, 0, 0, 1)",
                borderRadius: "5px",
                color: "#ffffff",
                padding: "10px",
                fontSize: "18px",
                fontWeight: "bolder",
              }}
            >
              Login
            </button>
          </div>
        </form>
        <p
          style={{
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          Don't have an account? Click below.
        </p>
        <Link
          to="/registration"
          style={{
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bolder",
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
