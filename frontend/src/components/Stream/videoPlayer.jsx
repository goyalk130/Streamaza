import VPlayer from "react-vplayer";
import "./video.css";
import { api } from "../../utils/Constant";
const VideoPlayer = (props) => {
  return (
    <div className="VPlayer">
      <button className="backBtn" onClick={props.closeBtn}>Back</button>
      <h1>{props.name || "Movie"}</h1>
      <VPlayer
        source={`${api}/api/v1/video/play/${props.id}`}
      />
    </div>
  );
};
export default VideoPlayer;
