import Courses from "./pages/courses";
import getCoursrs from './get/getCourses';

function App() {
  return (
    <div className="App container mt-4 mb-5">
      <Courses {...getCoursrs} />
    </div>
  );
}

export default App;
