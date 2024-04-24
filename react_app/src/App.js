import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Dashboard from "./screens/Dashboard";
import Genre from "./screens/Genre";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Movie from "./screens/Movie";
import Navigation from "./screens/Navigation";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Products from "./screens/Products";
import Profile from "./screens/Profile";
import Registration from "./screens/Registration";
import Subscription from "./screens/Subscription";
import TermsOfService from "./screens/TermsOfService";
import TVShows from "./screens/TVShows";
import UserSettings from "./screens/UserSettings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/user-settings" element={<UserSettings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
