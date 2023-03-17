import CourseList from "../components/course-list";
import Pagination from "../components/pagination";
import { useState, useEffect } from "react";
import Auth from "../services/auth";
import GetCoursesOrCourse from '../services/get-courses-or-course'

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataCourses, setDataCourses] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const token = await Auth();
      const courses = await GetCoursesOrCourse(token);
      setDataCourses(courses.courses);
    }
    fetchData();
  }, []);

  if (!dataCourses) {
    return (
      <div className="spinner-border m-5 " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const itemsPerPage = 10;
  const maxPage = Math.ceil(dataCourses.length / itemsPerPage);
  const currentData = dataCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="courses_page">
      <CourseList courses={currentData}/>
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Courses;