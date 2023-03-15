import CourseList from "../components/course-list";
import { useState } from "react"

const Courses = ({courses}) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(courses.length / itemsPerPage);
  const currentData = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  //console.log(currentData[0])

  return (
    <div className="courses_page">
      <CourseList courses={currentData} />

      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={nextPage} disabled={currentPage === maxPage}>
        Next Page
      </button>
    </div>
  );
};

export default Courses;