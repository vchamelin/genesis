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
      src: link + '/lesson-' + order + '.webp',
      type: 'video/webp'
    }]
  };

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
    <>
      <div>{order}</div>
      <div>{title}</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  )
}

export default Lesson;