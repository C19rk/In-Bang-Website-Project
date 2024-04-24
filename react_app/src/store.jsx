import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  paypalPaymentReducer,
  paypalCancelSubscriptionReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  paypalPayment: paypalPaymentReducer,
  paypalCancelSubscription: paypalCancelSubscriptionReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  // Add your initial states here
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
