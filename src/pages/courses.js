import CourseList from "../components/course-list";
import Pagination from "../components/pagination";
import { useState } from "react";

const Courses = ({ courses }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(courses.length / itemsPerPage);
  const currentData = courses.slice(
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