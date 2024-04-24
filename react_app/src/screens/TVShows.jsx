import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./InvisiScroll.css";
import FooterDash from "../components/FooterDash";
import vid14 from "../videos/tvshows/EdsHeinz.mp4";
import vid15 from "../videos/tvshows/EmployeeOfTheMonth.mp4";
import vid16 from "../videos/tvshows/Exile.mp4";
import vid17 from "../videos/tvshows/NOISES.mp4";
import vid18 from "../videos/tvshows/From.mp4";
import vid19 from "../videos/tvshows/OneYou.mp4";
import vid20 from "../videos/tvshows/THEAUTOFIRMWITHALEXVEGA.mp4";

import "./mediaqueries.css";
import SearchBar from "../components/SearchBar";

const TVShows = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const movieData = [
    {
      title: "Ed's Heinz",
      genre: "Short",
      rating: "N/A",
      src: vid14,
      poster: require("../videos/tvshows/EdsHeinz.jpg"),
    },
    {
      title: "Employee of the Month",
      genre: "Short",
      rating: "N/A",
      src: vid15,
      poster: require("../videos/tvshows/EmployeeOfTheMonth.jpg"),
    },
    {
      title: "Exile",
      genre: "Drama",
      rating: "7.3/10",
      src: vid16,
      poster: require("../videos/tvshows/Exile.jpg"),
    },
    {
      title: "From",
      genre: "Horror",
      rating: "7.7/10",
      src: vid18,
      poster: require("../videos/tvshows/From.jpg"),
    },
    {
      title: "NOISES",
      genre: "Short",
      rating: "N/A",
      src: vid17,
      poster: require("../videos/tvshows/NOISES.jpg"),
    },
    {
      title: "One You",
      genre: "Romance",
      rating: "7.9/10",
      src: vid17,
      poster: require("../videos/tvshows/OneYou.jpg"),
    },
    {
      title: "THE AUTO FIRM WITH ALEX VEGA",
      genre: "Reality",
      rating: "5.6/10",
      src: vid18,
      poster: require("../videos/tvshows/THEAUTOFIRMWITHALEXVEGA.jpg"),
    },
  ];

  const SearchFunction = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // Show message for a short duration before redirecting
    if (!userInfo) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [userInfo, navigate, searchQuery]);

  const filteredMovies = movieData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  const errormsg = {
    color: "#ff0000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "15vw",
    fontWeight: "bolder",
  };

  const handlePosterClick = (index) => {
    setSelectedMovie(movieData[index]);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  if (!userInfo) {
    return <div style={errormsg}>Login first!</div>;
  }

  return (
    <div className="card-container">
      <SearchBar onSearch={SearchFunction} />
      <FooterDash />
      <p
        style={{
          color: "transparent ",
          backgroundColor: "transparent",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
      <div>
        <Header user={userInfo} logoutHandler={logoutHandler} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {filteredMovies.map((movie, index) => (
            <div
              key={index}
              onClick={() => handlePosterClick(index)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: "2vh",
                marginRight: "2vh",
                marginBottom: "5vh", // Adjusted margin to create space between movie boxes
                backgroundColor: "#f9f9f9",
                width: "17.5%",
                height: "51vh", // Fixed height for each movie box
                borderRadius: "1vh",
                boxShadow: "0 0 2.5vw rgba(0, 0, 0, 0.1)",
                overflow: "hidden", // Adjusted overflow to hide extra content
                cursor: "pointer",
                border: "0.3vh solid white",
                borderRadius: "2vh",
              }}
            >
              <img
                src={movie.poster}
                alt={`Poster ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              {selectedMovie === movie && (
                <video
                  controls
                  src={movie.src}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
              <div style={{ padding: "2vh", width: "100%" }}>
                <h2 style={{ margin: "0", fontSize: "3vh", color: "#000000" }}>
                  {movie.title}
                </h2>
                <p
                  style={{
                    margin: "2vh 0",
                    fontSize: "2.5vh",
                    color: "#000000",
                  }}
                >
                  Genre: {movie.genre}
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "2.5vh",
                    color: "#000000",
                  }}
                >
                  Rating: {movie.rating}
                </p>
              </div>
            </div>
          ))}
          {selectedMovie && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "999",
              }}
              onClick={handleCloseModal}
            >
              <video
                controls
                autoPlay
                src={selectedMovie.src}
                style={{
                  maxWidth: "80vw",
                  maxHeight: "80vh",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <p
        style={{
          color: "transparent ",
          backgroundColor: "transparent",
        }}
      >
        <br />
        <br />
        <br />
      </p>
    </div>
  );
};

export default TVShows;
