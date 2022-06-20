import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GenreBox from "../GenreBox/GenreBox";
import "./Home.css";

const Home = () => {
  const HomeWIshlistState = useSelector((state) => state.HomeWIshlistState);

  // useEffect(() => {}, [HomeWIshlistState]);

  const userState = useSelector((state) => state.UserState);

  const { state, setState } = useState({});

  async function getdata() {
    // const data =await fetch("https://imdb-api.com/en/API/Posters/k_gedxfnta/tt1375666")
    const data = fetch(
      "https://imdb-api.com/en/API/Posters/k_gedxfnta/tt1375666"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.backdrops);
        setState(data);
      });
    getdata();
  }
  function checkHomeOrWishlistorSearch() {
    if (HomeWIshlistState.active == "home") {
      return (
        <div className="videos-box-con">
          <GenreBox genre="Action"/>
          <GenreBox genre="Comedy"/>
          <GenreBox genre="Adventure"/>
          <GenreBox genre="Crime"/>
          <GenreBox genre="Drama"/>
          <GenreBox genre="Thriler"/>
          <GenreBox genre="Fantasy"/>
          <GenreBox genre="Sci"/>
        </div>
      );
    } else if (HomeWIshlistState.active == "wishlist") {
      return (
        <div className="wishlist">
          <GenreBox />
        </div>
      );
    } else if (HomeWIshlistState.active == "search") {
      return (
        <div className="wishlist">
          <GenreBox />
        </div>
      );
    }
  }

  return <div className="Home">{checkHomeOrWishlistorSearch()}</div>;
};

export default Home;
