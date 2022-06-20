import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import VideoBox from '../VideoBox/VideoBox'

const Videos = () => {
    const loc = useLocation()
    const g = useParams()
  console.log(loc.state)
  
  return (
    
    <div className='Search-box'>
        <div className='wishlist'>
{
    loc.state && loc.state.map(video=>{
        return <VideoBox data={video} url={video.thumbnail}/>})
}
        </div>
    </div>
  )
}

export default Videos