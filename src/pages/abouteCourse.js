// import useParams from 'react';
import getAbouteCourse from '../get/getAbouteCourse'
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

function AbouteCourse() {
  //const { courseId } = useParams();
  //const course = getCourses().find((course) => course.id === courseId);
  console.log(getAbouteCourse)
  return (
    <div>
      <Button>
        <Link to={'/'}>Back</Link>
      </Button>
      <h1>asad</h1>
    </div>
  );
}

export default AbouteCourse;