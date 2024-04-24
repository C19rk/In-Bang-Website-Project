import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./InvisiScroll.css";
import FooterDash from "../components/FooterDash";
import SearchBar from "../components/SearchBar";

// Import movie videos and posters
import vid1 from "../videos/movies/ABirdsNest.mp4";
import vid2 from "../videos/movies/Boruto.mp4";
import vid3 from "../videos/movies/Extraordinary.mp4";
import vid4 from "../videos/movies/HarryPotterandtheChamberofSecrets.mp4";
import vid5 from "../videos/movies/Hunchback.mp4";
import vid6 from "../videos/movies/Joker.mp4";
import vid7 from "../videos/movies/MobileSuitGundam.mp4";
import vid8 from "../videos/movies/Ponyo.mp4";
import vid9 from "../videos/movies/RockyV.mp4";
import vid10 from "../videos/movies/StarWarsEpisodeVIIITheLastJedi.mp4";
import vid11 from "../videos/movies/TheBadGuys.mp4";
import vid12 from "../videos/movies/THELEGO®MOVIE™4DANEWADVENTURE.mp4";
import vid13 from "../videos/movies/WeBareBears.mp4";
import vid14 from "../videos/tvshows/EdsHeinz.mp4";
import vid15 from "../videos/tvshows/EmployeeOfTheMonth.mp4";
import vid16 from "../videos/tvshows/Exile.mp4";
import vid17 from "../videos/tvshows/NOISES.mp4";
import vid18 from "../videos/tvshows/From.mp4";
import vid19 from "../videos/tvshows/OneYou.mp4";
import vid20 from "../videos/tvshows/THEAUTOFIRMWITHALEXVEGA.mp4";

const Genre = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Movie data grouped by genre
  const movieData = {
    Action: {
      "Star Wars Episode VIII: The Last Jedi": {
        title: "Star Wars Episode VIII: The Last Jedi",
        rating: "7/10",
        src: vid10,
        poster: require("../videos/movies/StarWarsEpisodeVIIITheLastJedi.jpg"),
      },
      // Add other action movies...
    },
    Animation: {
      "Boruto: Naruto the Movie": {
        title: "Boruto: Naruto the Movie",
        rating: "7.8/10",
        src: vid2,
        poster: require("../videos/movies/Boruto.jpg"),
      },
      Hunchback: {
        title: "Hunchback",
        rating: "6.9/10",
        src: vid5,
        poster: require("../videos/movies/Hunchback.jpg"),
      },
      "Mobile Suit Gundam": {
        title: "Mobile Suit Gundam",
        rating: "7.9/10",
        src: vid7,
        poster: require("../videos/movies/MobileSuitGundam.jpg"),
      },
      "THE LEGO® MOVIE™ 4D A NEW ADVENTURE": {
        title: "THE LEGO® MOVIE™ 4D A NEW ADVENTURE",
        rating: "6.2/10",
        src: vid12,
        poster: require("../videos/movies/THELEGO®MOVIE™4DANEWADVENTURE.jpg"),
      },
      "The Bad Guys": {
        title: "The Bad Guys",
        rating: "6.7/10",
        src: vid11,
        poster: require("../videos/movies/TheBadGuys.jpg"),
      },
      "We Bare Bears": {
        title: "We Bare Bears",
        rating: "7.9/10",
        src: vid13,
        poster: require("../videos/movies/WeBareBears.jpg"),
      },
      // Add other animation movies...
    },
    Crime: {
      Joker: {
        title: "Joker",
        rating: "8.4/10",
        src: vid6,
        poster: require("../videos/movies/Joker.jpg"),
      },
      // Add other crime movies...
    },
    Drama: {
      Exile: {
        title: "Exile",
        rating: "7.3/10",
        src: vid16,
        poster: require("../videos/tvshows/Exile.jpg"),
      },
      Extraordinary: {
        title: "Extraordinary",
        rating: "7.4/10",
        src: vid3,
        poster: require("../videos/movies/Extraordinary.jpg"),
      },
      // Add other drama movies...
    },
    Family: {
      Ponyo: {
        title: "Ponyo",
        rating: "7.7/10",
        src: vid8,
        poster: require("../videos/movies/Ponyo.jpg"),
      },
      // Add other family movies...
    },
    Fantasy: {
      "Harry Potter and the Chamber of Secrets": {
        title: "Harry Potter and the Chamber of Secrets",
        rating: "7.4/10",
        src: vid4,
        poster: require("../videos/movies/HarryPotterandtheChamberofSecrets.jpg"),
      },
      // Add other fantasy movies...
    },
    Horror: {
      "A Bird's Nest": {
        title: "A Bird's Nest",
        rating: "6.1/10",
        src: vid1,
        poster: require("../videos/movies/ABirdsNest.jpg"),
      },
      From: {
        title: "From",
        rating: "7.7/10",
        src: vid1,
        poster: require("../videos/movies/ABirdsNest.jpg"),
      },
      // Add other horror movies...
    },
    Reality: {
      "THE AUTO FIRM WITH ALEX VEGA": {
        title: "THE AUTO FIRM WITH ALEX VEGA",
        rating: "5.6/10",
        src: vid18,
        poster: require("../videos/tvshows/THEAUTOFIRMWITHALEXVEGA.jpg"),
      },
      // Add other reality shows...
    },
    Romance: {
      "One You": {
        title: "One You",
        rating: "7.9/10",
        src: vid19,
        poster: require("../videos/tvshows/OneYou.jpg"),
      },
      // Add other romance movies...
    },
    Short: {
      "Ed's Heinz": {
        title: "Ed's Heinz",
        rating: "N/A",
        src: vid14,
        poster: require("../videos/tvshows/EdsHeinz.jpg"),
      },
      "Employee of the Month": {
        title: "Employee of the Month",
        rating: "N/A",
        src: vid15,
        poster: require("../videos/tvshows/EmployeeOfTheMonth.jpg"),
      },
      NOISES: {
        title: "NOISES",
        rating: "N/A",
        src: vid17,
        poster: require("../videos/tvshows/NOISES.jpg"),
      },
      // Add other short movies...
    },
    Sport: {
      "Rocky V": {
        title: "Rocky V",
        rating: "5.3/10",
        src: vid9,
        poster: require("../videos/movies/RockyV.jpg"),
      },
      // Add other sport movies...
    },
  };

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

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
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
      </p>
      <div>
        <Header user={userInfo} logoutHandler={logoutHandler} />
        {/* Render tables for each genre */}
        <div style={{ display: "flex" }}>
          {Object.entries(movieData).map(([genre, movies]) => (
            <div key={genre} style={{ marginLeft: "1vh", marginRight: "1vh" }}>
              <h2
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#ffff00",
                  fontSize: "3vh",
                  fontWeight: "bolder",
                }}
              >
                {genre}
              </h2>
              <div>
                {Object.entries(movies).map(([movieKey, movie]) => {
                  // Check if the movie title matches the search query
                  const matchesSearch = movie.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
                  // If search query is empty or movie matches search, render the movie
                  if (!searchQuery || matchesSearch) {
                    return (
                      <div
                        key={movieKey}
                        onClick={() => handlePosterClick(movie)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          marginBottom: "2vh",
                          backgroundColor: "#f9f9f9",
                          width: "100%",
                          height: "30%",
                          borderRadius: "1vh",
                          boxShadow: "0 0 2.5vw rgba(0, 0, 0, 0.1)",
                          overflow: "hidden",
                          cursor: "pointer",
                          border: "0.3vh solid white",
                        }}
                      >
                        <img
                          src={movie.poster}
                          alt={`Poster ${movieKey + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        {selectedMovie === movie && (
                          <video
                            controls
                            autoPlay
                            src={movie.src}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        )}
                        <div style={{ padding: "2vh", width: "100%" }}>
                          <h2
                            style={{
                              margin: "0",
                              fontSize: "3vh",
                              color: "#000000",
                            }}
                          >
                            {movie.title}
                          </h2>
                          <p
                            style={{
                              margin: "2vh 0",
                              fontSize: "2.5vh",
                              color: "#000000",
                            }}
                          >
                            Rating: {movie.rating}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
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

export default Genre;
