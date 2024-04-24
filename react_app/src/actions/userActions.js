import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  PAYPAL_INITIATE_PAYMENT_REQUEST,
  PAYPAL_INITIATE_PAYMENT_SUCCESS,
  PAYPAL_INITIATE_PAYMENT_FAIL,
  PAYPAL_CONFIRM_PAYMENT_REQUEST,
  PAYPAL_CONFIRM_PAYMENT_SUCCESS,
  PAYPAL_CONFIRM_PAYMENT_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/login/",
      { username: username, password: password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data)); // Store userInfo in localStorage
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const registration =
  (first_name, last_name, username, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/registration/",
        { first_name, last_name, username, email, password },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUserSettings = (userData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.patch("/api/user-settings/", userData, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    // Optionally, update the userInfo in local storage and state
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.status === 401
        ? "Old password is incorrect!"
        : error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const initiatePaypalPayment = () => async (dispatch) => {
  try {
    dispatch({ type: PAYPAL_INITIATE_PAYMENT_REQUEST });

    const { data } = await axios.post("/api/initiate-payment/");
    dispatch({ type: PAYPAL_INITIATE_PAYMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PAYPAL_INITIATE_PAYMENT_FAIL, payload: error.message });
  }
};

export const confirmPaypalPayment = () => async (dispatch) => {
  try {
    dispatch({ type: PAYPAL_CONFIRM_PAYMENT_REQUEST });

    const { data } = await axios.post("/api/handle-payment-confirmation/");
    dispatch({ type: PAYPAL_CONFIRM_PAYMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PAYPAL_CONFIRM_PAYMENT_FAIL, payload: error.message });
  }
};
