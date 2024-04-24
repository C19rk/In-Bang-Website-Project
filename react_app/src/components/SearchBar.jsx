import React, { useState } from "react";
import pic1 from "../images/searchicon.png";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (typeof onSearch === "function") {
      onSearch(query.trim()); // Pass the trimmed query to the parent component
    }
  };

  const searchStyle = {
    height: "6vh",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none", // Remove border
    outline: "none", // Remove outline
    zIndex: 5,
  };

  const searchBarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    backgroundColor: "#ffffff",
    padding: "1vh 2vh", // Add padding to the search bar
    border: "0.1vh solid #dddddd", // Add border for visibility
    borderRadius: "5vh",
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "16%", // Adjust the width as needed
    zIndex: 5,
  };

  return (
    <form onSubmit={handleSearch} style={searchBarStyle}>
      <button
        type="submit"
        style={{
          border: "none",
          backgroundColor: "transparent",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img src={pic1} alt="searchicon" style={searchStyle} />
      </button>
      <input
        style={{
          padding: "1vh",
          backgroundColor: "transparent",
          borderRadius: "0vh",
          border: "none",
          outline: "none",
        }}
        type="text"
        placeholder="Type something to search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;
