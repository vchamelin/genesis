import Courses from "./pages/courses";
import getCoursrs from './get/getCourses';
import AbouteCourse from "./pages/abouteCourse";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container mt-4 mb-5">
      <Routes>
        <Route path="/" element={<Courses {...getCoursrs} /> } />
        <Route path="/about/:id" element={<AbouteCourse />} />
      </Routes>
    </div>
  );
}

export default App;
