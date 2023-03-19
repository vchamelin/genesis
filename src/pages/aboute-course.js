import { Link, useParams } from "react-router-dom";
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
      <div className="mx-auto" style={{width: '100px', height: '100%'}}>
        <div className="spinner-border m-5 "  role="status">
        </div>
      </div>
      
    );
  }

  const { title, description, rating, lessons} = dataCourse;
  const { skills, courseVideoPreview } = dataCourse.meta;
  
  return (
    <div>
      <div className='d-flex '>
        <Link to={'/'} className='btn btn-lg btn-outline-primary text-xl-start '>&#129044;</Link>
        <h1 className="m-0 mx-auto text-center fw-semibold">{title}</h1>
        <StarRating className='p-3' rating={rating} />
      </div>
      <h2 className="m-4 fs-3 fw-normal"><span className="fs-4 fst-italic">Aboute course: </span>{description}</h2>
      <div className="fs-4 fw-bolder d-flex justify-content-around flex-wrap ">
        Skills: 
        {skills.map(skill => (
        <p className="m-1 gap-1 btn btn-outline-secondary ">{skill}</p>
      ))}</div>
      {lessons.map(lesson => (
        <Lesson lesson={lesson}/>
      ))}
    </div>
  );
}

export default AbouteCourse;