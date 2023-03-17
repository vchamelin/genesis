import VideoPlayer from "./video-hls";

const Lesson = ({lesson}) => {
  const { order, title, status, link, previewImageLink} = lesson;

  return (
    <div>
      <div>{order}</div>
      <div>{title}</div>
      <VideoPlayer link={link}/>
    </div>
  )
}

export default Lesson;