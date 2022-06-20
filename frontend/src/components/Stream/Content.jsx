import React, { useEffect, useState, useCallback } from "react";
import Button from "./Button.jsx";
// import movieData from "../data.js";
import "./Content.css";
import VideoPlayer from "./videoPlayer.jsx";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
const Content = () => {
  const location = useLocation()
  const video = location.state
  
  const {id} = useParams()
  console.log(id)
  const [data, setData] = useState({});
  const [playing, setPlaying] = useState(false);
  const movieId = video.code;
  const fetchMovieDataHandler = useCallback(async () => {
    const response = await fetch(
      `https://imdb-api.com/en/API/Title/k_gedxfnta/${movieId}/Trailer,`
    );
    const data = await response.json();
    console.log(data.genreList[0].value);
    const transformedData = {
      title: data.title || "Streami",
      year: data.year || "2022",
      description:
        `${data.plot.slice(0, 500)} ...` ||
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      poster: data.image || "https://wallpaperaccess.com/full/52447.jpg",
      release: data.releaseDate || "02-12-2022",
      rating: data.imDbRating || "8.0",
      fullTitle: data.fullTitle,
      trailer: data.trailer.link,
      backdrop: data.trailer.thumbnailUrl,
      genre1: data.genreList[0].value,
      genre2: data.genreList[1].value,
      genre3: data.genreList[2].value,
      actor1: data.actorList[0].name,
      actor2: data.actorList[1].name,
      actor3: data.actorList[2].name,
      acimg1: data.actorList[0].image,
      acimg2: data.actorList[1].image,
      acimg3: data.actorList[2].image,
    };
    setData(transformedData);
    console.log(data.genre);
  }, []);
  useEffect(() => {
    fetchMovieDataHandler();
  }, [fetchMovieDataHandler]);
  if (playing === true) {
    return <VideoPlayer name={video.name} id={video._id} closeBtn={(playing) => setPlaying(false)} />;
    // return <video src={`http://localhost:4000/api/v1/video/play/${video._id}`} controls></video>
  } else {
    return (
      <div className="movie-card">
        <div className="container">
          <a href="#">
            <img
              src={data.poster}
              width="200rem"
              alt="cover"
              className="cover"
            />
          </a>
          <div className="hero">
            <div
              className="herokebefore"
              style={{ backgroundImage: `url(${data.backdrop})` }}
            ></div>
            <div className="details">
              <div className="title1">
                {data.title}
                <span>IMDB - {data.rating}</span>
              </div>

              <div className="title2">{data.fullTitle}</div>

              <Button trailer={data.trailer} variant="outlined">
                Watch Trailer
              </Button>
            </div>
          </div>
          <div className="description">
            <div className="column1">
              <span className="tag">{data.genre1}</span>
              <span className="tag">{data.genre2}</span>
              <span className="tag">{data.genre3}</span>
            </div>

            <div className="column2">
              <p>{data.description}</p>

              <div className="avatars">
                <a href="#" data-tooltip={data.actor1} data-placement="top">
                  <img src={data.acimg1} alt="avatar1" />
                </a>

                <a href="#" data-tooltip={data.actor2} data-placement="top">
                  <img src={data.acimg2} alt="avatar2" />
                </a>

                <a href="#" data-tooltip={data.actor3} data-placement="top">
                  <img src={data.acimg3} alt="avatar3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <button className="playBtn" onClick={(playing) => setPlaying(true)}>
          Play
        </button>
      </div>
    );
  }
};
export default Content;
