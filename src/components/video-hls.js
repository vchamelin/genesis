import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

function VideoPlayer({link}) {
  const playerRef = React.useRef();

  function playVideo() {
    playerRef.current.play();
  }

  function pauseVideo() {
    playerRef.current.pause();
  }

  function toggleControls() {
    playerRef.current.controls = !playerRef.current.controls;
  }

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src={link}
    />
  );
}

export default VideoPlayer;
// ReactDOM.render(<MyCustomComponent />, document.getElementById('video'+ order));