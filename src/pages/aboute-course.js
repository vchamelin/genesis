import { Link, useParams } from "react-router-dom";
import {Button} from 'react-bootstrap';
import StarRating from '../components/raiting';
import Lesson from '../components/lesson';
import { useEffect, useState } from "react";
import Auth from "../services/auth";
import GetCoursesOrCourse from "../services/get-courses-or-course";

function AbouteCourse() {
  let { idCourses } = useParams();

  const [dataCourse, setDataCourse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const token = await Auth();
      const course = await GetCoursesOrCourse(token, idCourses);
      setDataCourse(course);
    }
    fetchData();
  }, []);

  if (!dataCourse) {
    return (
      <div className="spinner-border m-5 " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const { title, description, rating, lessons} = dataCourse;
  const { skills, courseVideoPreview } = dataCourse.meta;

  // console.log(dataCourse)

  return (
    <div>
      <Button>
        <Link to={'/'}>Back</Link>
      </Button>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{skills}</h3>
      <StarRating rating={rating} />
      {lessons.map(lesson => (
        <Lesson lesson={lesson}/>
      ))}
    </div>
  );
}

export default AbouteCourse;