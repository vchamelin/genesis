import VideoJS from "./video-player";
import {useRef} from 'react';
import videojs from 'video.js';

const Lesson = ({lesson}) => {
  const { order, title, status, link, previewImageLink} = lesson;

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: link,
      type: 'video/m3u8'
    }]
  };
  console.log(videoJsOptions.sources[0].src)
  const playerRef = useRef(null);
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div>
      <div className="p-3 d-flex align-items-center  justify-content-around">
        <div className="fs-3 fst-italic">Lesson number :{order}</div>
        <div className="fs-2 fw-bolder">"{title}"</div>
      </div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  )
}

export default Lesson;