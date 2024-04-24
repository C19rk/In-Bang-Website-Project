import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./InvisiScroll.css";
import FooterDash from "../components/FooterDash";
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

import "./mediaqueries.css";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const movieData = [
    {
      title: "A Bird's Nest",
      genre: "Horror",
      rating: "6.1/10",
      src: vid1,
      poster: require("../videos/movies/ABirdsNest.jpg"),
    },
    {
      title: "Boruto: Naruto the Movie",
      genre: "Animation",
      rating: "7.8/10",
      src: vid2,
      poster: require("../videos/movies/Boruto.jpg"),
    },
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
      title: "Extraordinary",
      genre: "Drama",
      rating: "7.4/10",
      src: vid3,
      poster: require("../videos/movies/Extraordinary.jpg"),
    },
    {
      title: "From",
      genre: "Horror",
      rating: "7.7/10",
      src: vid18,
      poster: require("../videos/tvshows/From.jpg"),
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      genre: "Fantasy",
      rating: "7.4/10",
      src: vid4,
      poster: require("../videos/movies/HarryPotterandtheChamberofSecrets.jpg"),
    },
    {
      title: "Hunchback",
      genre: "Animation",
      rating: "6.9/10",
      src: vid5,
      poster: require("../videos/movies/Hunchback.jpg"),
    },
    {
      title: "Joker",
      genre: "Crime",
      rating: "8.4/10",
      src: vid6,
      poster: require("../videos/movies/Joker.jpg"),
    },
    {
      title: "Mobile Suit Gundam",
      genre: "Animation",
      rating: "7.9/10",
      src: vid7,
      poster: require("../videos/movies/MobileSuitGundam.jpg"),
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
      title: "Ponyo",
      genre: "Family",
      rating: "7.7/10",
      src: vid8,
      poster: require("../videos/movies/Ponyo.jpg"),
    },
    {
      title: "Rocky V",
      genre: "Sport",
      rating: "5.3/10",
      src: vid9,
      poster: require("../videos/movies/RockyV.jpg"),
    },
    {
      title: "Star Wars Episode VIII: The Last Jedi",
      genre: "Action",
      rating: "7/10",
      src: vid10,
      poster: require("../videos/movies/StarWarsEpisodeVIIITheLastJedi.jpg"),
    },
    {
      title: "THE AUTO FIRM WITH ALEX VEGA",
      genre: "Reality",
      rating: "5.6/10",
      src: vid18,
      poster: require("../videos/tvshows/THEAUTOFIRMWITHALEXVEGA.jpg"),
    },
    {
      title: "The Bad Guys",
      genre: "Animation",
      rating: "6.7/10",
      src: vid11,
      poster: require("../videos/movies/TheBadGuys.jpg"),
    },
    {
      title: "THE LEGO® MOVIE™ 4D A NEW ADVENTURE",
      genre: "Animation",
      rating: "6.2/10",
      src: vid12,
      poster: require("../videos/movies/THELEGO®MOVIE™4DANEWADVENTURE.jpg"),
    },
    {
      title: "We Bare Bears",
      genre: "Animation",
      rating: "7.9/10",
      src: vid13,
      poster: require("../videos/movies/WeBareBears.jpg"),
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
    // if (!userInfo || !userInfo.isSubscriber) {
    //   setShowMessage(true);
    //   const timer = setTimeout(() => {
    //     navigate("/");
    //   }, 2000);
    //   return () => clearTimeout(timer);
    // }
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

  // const errorpay = {
  //   color: "#ff0000",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  //   height: "100vh",
  //   fontSize: "6.5vw",
  //   fontWeight: "bolder",
  // };

  const handlePosterClick = (index) => {
    setSelectedMovie(movieData[index]);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  // if (!userInfo || !userInfo.isSubscriber) {
  //   return <div style={errorpay}>Subscribe first to access!</div>;
  // }

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

export default Dashboard;
