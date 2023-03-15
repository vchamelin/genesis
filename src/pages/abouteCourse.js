// import useParams from 'react';
import getAbouteCourse from '../get/getAbouteCourse'
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import StarRating from '../components/raiting';
import Lesson from '../components/lesson';

function AbouteCourse() {
  //const { courseId } = useParams();
  //const course = getCourses().find((course) => course.id === courseId);
  console.log(getAbouteCourse);
  const { title, description, rating, lessons} = getAbouteCourse;
  const {skills, courseVideoPreview} = getAbouteCourse.meta;

  console.log(lessons)
  return (
    <div>
      <Button>
        <Link to={'/'}>Back</Link>
      </Button>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <StarRating rating={rating} />
      {lessons.map(lesson => (
        <Lesson lesson={lesson}/>
      ))}
    </div>
  );
}

export default AbouteCourse;