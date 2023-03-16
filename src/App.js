import Courses from "./pages/courses";
import AbouteCourse from "./pages/abouteCourse";
import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./services/auth";
import GetCourses from './services/get-courses'

function App() {
  const [dataCourses, setDataCourses] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const token = await Auth();
      const courses = await GetCourses(token);
      setDataCourses(courses);
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

  return (
    <div className="App container mt-4 mb-5">
      <Routes>
        <Route path="/" element={<Courses {...dataCourses} /> } />
        <Route path="/about/:id" element={<AbouteCourse />} />
      </Routes>
    </div>
  );
}

export default App;
