import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./VideoBox.css"

const VideoBox = (props) => {
  const nav = useNavigate()
  function onClicking(){
    nav(`/play/${props.data._id}`,{state:props.data})
  }
  return (
    <div onClick={onClicking} className='VideoBox' >
        <img className='thumb' src={props.url}/>
        {/* <p className='video-name'>{props.data.name}</p> */}
    </div>
  )
}

export default VideoBox