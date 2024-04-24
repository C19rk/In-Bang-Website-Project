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
  PAYPAL_PAYMENT_REQUEST,
  PAYPAL_PAYMENT_SUCCESS,
  PAYPAL_PAYMENT_FAIL,
  PAYPAL_CANCEL_SUBSCRIPTION_REQUEST,
  PAYPAL_CANCEL_SUBSCRIPTION_SUCCESS,
  PAYPAL_CANCEL_SUBSCRIPTION_FAIL,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const paypalPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYPAL_PAYMENT_REQUEST:
      return { loading: true };
    case PAYPAL_PAYMENT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case PAYPAL_PAYMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const paypalCancelSubscriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYPAL_PAYMENT_REQUEST:
      return { loading: true };
    case PAYPAL_PAYMENT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case PAYPAL_PAYMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
