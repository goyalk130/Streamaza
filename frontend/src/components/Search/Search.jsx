import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoBox from '../VideoBox/VideoBox'
import ViewVideos from '../ViewVideos/ViewVideos'
import "./Search.css"

const Search = () => {
    const dataState = useSelector(state=>state.DataState)
    useEffect(() => {
        
    }, [dataState])
    
  return (
//     <div className='Search-box'>
//         <div className='wishlist'>
// {
//     dataState.Search.data && dataState.Search.data.map(video=>{
//         console.log(dataState.Search)
//         return <VideoBox data={video} url={video.thumbnail}/>})
// }
//         </div>
//     </div>
<ViewVideos data={dataState.Search.data}/>
  )
}

export default Search