import {Image ,Button} from 'react-bootstrap';

const CoursePrev = ({course}) => {
  const { title, previewImageLink, lessonsCount, rating, description } = course;
  const urlPreviewImage = previewImageLink + '/cover.webp';
  console.log(course)
  return (
    <div className="card">
      <Image
        className='img-fluid'
        src={urlPreviewImage}
        alt={title}
        style={{ minHeight: '15rem' }}
      />
      <div className='card-body d-flex flex-column justify-content-between'  style={{ minHeight: '15rem' }}>
        <h3 className="card-title fw-bold text-lg mb-0 text-center align-text-bottom">{title}</h3>
        <h5 className='p-3'>{description}</h5>
        <p className="text-sm mb-0 text-muted">{lessonsCount} lessons</p>
      </div>
      <div className='card-footer d-flex justify-content-between align-items-center'>
        <p className="text-sm text-muted col mb-0">Rating: {rating}</p>
        <Button className='col-auto text-inherit'>Read more</Button>
      </div>
    </div>
  )
}

export default CoursePrev;
