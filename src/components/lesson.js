const Lesson = ({lesson}) => {
  const { order, title, status, link, previewImageLink} = lesson;

  return (
    <div>
      <div>{order}</div>
      <div>{title}</div>
      <video width="480" controls  >
        <source src={link + '/' + order + '.webp'} type="video/webm" />
        Your browser doesn't support HTML5 video tag.
      </video>
    </div>
  )
}

export default Lesson;