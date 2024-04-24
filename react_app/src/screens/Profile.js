import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin.userInfo);

  useEffect(() => {
    if (userLogin === null) {
      navigate("/");
    }
  }, [userLogin]);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "8px",
        color: "inherit",
      }}
    >
      <div
        style={{
          marginTop: "8px",
          backgroundColor: "inherit",
          color: "white",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src="/avatar.jpg"
            alt="User Avatar"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <h5>{userLogin ? userLogin.username : null}</h5>
          <p>{userLogin ? userLogin.email : null}</p>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
