const CoursePrev = ({course}) => {
  const { title, previewImageLink, lessonsCount, rating } = course;
  const urlPreviewImage = previewImageLink + '/cover.webp';

  return (
    <div className="course-preview">
      <h2>{title}</h2>
      <img src={urlPreviewImage} alt={title} />
      <p>{lessonsCount} lessons</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export default CoursePrev;
