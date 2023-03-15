import Courses from "./pages/courses";
import getCoursrs from './get/getCourses';

function App() {
  return (
    <div className="App">
      <Courses {...getCoursrs} />
    </div>
  );
}

export default App;
