import React from 'react'
import { useParams } from 'react-router-dom'
import VideoBox from '../VideoBox/VideoBox'

const ViewVideos = ({data}) => {
  console.log("in view video")
  return (
    
    <div className='Search-box'>
        <div className='wishlist'>
{
    data && data.map(video=>{
        return <VideoBox data={video} url={video.thumbnail}/>})
}
        </div>
    </div>
  )
}

export default ViewVideos
