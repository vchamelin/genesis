import Courses from "./pages/courses";
import AbouteCourse from "./pages/aboute-course";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container mt-4 mb-5">
      <Routes>
        <Route path="/" element={<Courses /> } />
        <Route path="/about/:idCourses" element={<AbouteCourse />} />
      </Routes>
    </div>
  );
}

export default App;
