import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../utils/Constant";
import {
  SetAction,
  SetAdventure,
  SetComedy,
  SetCrime,
  SetDrama,
  SetFantasy,
  SetSciFi,
  SetThriller,
} from "../../Slices/Data";

import VideoBox from "../VideoBox/VideoBox";
import "./GenreBox.css";

const GenreBox = (props) => {
  const dataState = useSelector((state) => state.DataState);
  const loginState = useSelector((state) => state.LoginState);
  const dispatcher = useDispatch();
  const [thumbnail,setThumbnail] = useState(()=>{
    console.log(props.genre)
    switch (props.genre) {
          case "Action":
            // setUpdate(e=>!e)
            return dataState.Action.data && dataState.Action.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Adventure":
            return dataState.Adventure.data && dataState.Adventure.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Comedy":
            return dataState.Comedy.data && dataState.Comedy.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Crime":
            return dataState.Crime.data && dataState.Crime.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Drama":
            return dataState.Drama.data && dataState.Drama.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Fanatasy":
            return dataState.Fanatasy.data && dataState.Fanatasy.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Sci":
            return dataState.SciFi.data && dataState.SciFi.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Thriller":
            return dataState.Thriller.data && dataState.Thriller.data.map(video=>{
              return <VideoBox data={video}  url={video.thumbnail}/>
            })
        }
      
  })

  const getData = () => {
    if (loginState.success && props.genre) {
      const url = `${api}/api/v1/video/all?genre=${props.genre}`;
      axios.get(url).then((res) => {
        // console.log(res);
        switch (res.data.query.genre) {
          case "Action":
            dispatcher(SetAction(res.data.videos));
            break
          case "Adventure":
            dispatcher(SetAdventure(res.data.videos));
            break
          case "Comedy":
            console.log(res.data.videos)
            dispatcher(SetComedy(res.data.videos))
            break
          case "Crime":
            dispatcher(SetCrime(res.data.videos));
            break
          case "Drama":
            dispatcher(SetDrama(res.data.videos));
            break
          case "Fanatasy":
            dispatcher(SetFantasy(res.data.videos));
            break
          case "Sci":
            dispatcher(SetSciFi(res.data.videos));
            break
          case "Thriller":
            dispatcher(SetThriller(res.data.videos));
            break
        }
      });
    }
  };

  
  const getThumbnails = ()=>{
    console.log(props.genre)
    switch (props.genre) {
          case "Action":
            // setUpdate(e=>!e)
            return dataState.Action.data && dataState.Action.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Adventure":
            return dataState.Adventure.data && dataState.Adventure.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Comedy":
            return dataState.Comedy.data && dataState.Comedy.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Crime":
            return dataState.Crime.data && dataState.Crime.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Drama":
            return dataState.Drama.data && dataState.Drama.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Fanatasy":
            return dataState.Fanatasy.data && dataState.Fanatasy.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Sci":
            return dataState.SciFi.data && dataState.SciFi.data.map(video=>{
              return <VideoBox data={video} url={video.thumbnail}/>
            })
          case "Thriller":
            return dataState.Thriller.data && dataState.Thriller.data.map(video=>{
              return <VideoBox data={video}  url={video.thumbnail}/>
            })
        }
      
  }

  
  
  useEffect(() => {
    getData()
  }, [loginState])

  
  useEffect(() => {
    setThumbnail((e)=>{
      console.log(props.genre)
      switch (props.genre) {
            case "Action":
              // setUpdate(e=>!e)
              return dataState.Action.data && dataState.Action.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Adventure":
              return dataState.Adventure.data && dataState.Adventure.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Comedy":
              return dataState.Comedy.data && dataState.Comedy.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Crime":
              return dataState.Crime.data && dataState.Crime.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Drama":
              return dataState.Drama.data && dataState.Drama.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Fanatasy":
              return dataState.Fanatasy.data && dataState.Fanatasy.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Sci":
              return dataState.SciFi.data && dataState.SciFi.data.map(video=>{
                return <VideoBox data={video} url={video.thumbnail}/>
              })
            case "Thriller":
              return dataState.Thriller.data && dataState.Thriller.data.map(video=>{
                return <VideoBox data={video}  url={video.thumbnail}/>
              })
          }
        
    })
  }, [dataState])

  return (<div className="GenreBox-wrapper"><h1>{props.genre}</h1>
    <div className="GenreBox">
    
      <div className="Genre-child">
{ thumbnail
}
      </div>
    </div></div>
  );
};

export default GenreBox;
