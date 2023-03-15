import {Image ,Button, Dropdown} from 'react-bootstrap';
import StarRating from './raiting';

const CoursePrev = ({course}) => {
  const { id, title, previewImageLink, lessonsCount, rating, description } = course;
  const { skills } = course.meta;
  const urlPreviewImage = previewImageLink + '/cover.webp';

  return (
    <div className="card shadow bg-body-tertiary rounded" key={id}>
      <Image
        className='img-fluid border-0 rounded-top'
        src={urlPreviewImage}
        alt={title}
        style={{ minHeight: '17rem', objectFit: 'cover' }}
      />
      <div className='card-body d-flex flex-column justify-content-between w-100'  style={{ minHeight: '16rem' }}>
        <h3 className="card-title fw-bold text-lg mb-0 text-center align-text-bottom">{title}</h3>
        <h5 className='p-3'>{description}</h5>

        <p className="text-sm mb-0 text-muted">{lessonsCount} lessons</p>
      </div>
      <div className='card-footer d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <p className="text-sm text-muted col mb-0 p-2">Rating: </p>
          <StarRating rating={rating}/>
        </div>
      <div className='dropup d-flex gap-2'>
        {!!skills ? (
          <Dropdown drop='up'>
            <Dropdown.Toggle variant="warning">Skills </Dropdown.Toggle>
            <Dropdown.Menu>
              {skills.map(skill => (
                <Dropdown.Item className='disabled text-dark'>{skill}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : ('')}
        <Button className='col-auto text-inherit'>Read more</Button>
      </div>
      </div>
    </div>
  )
}

export default CoursePrev;
