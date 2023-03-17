import { HOST, VERSION, COURSESPATH } from "./dot-env";
import { getCourses } from "../mock/get-courses";
import { getAbouteCourse } from "../mock/get-aboute-course";

const GetCoursesOrCourse = async (token, id = '') => {
  let url =  HOST + VERSION + COURSESPATH + '/' + id;

  try {
    const response = await fetch(url, {method:'GET', headers: {Authorization: `Bearer ${token}`} });
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === 'Unauthorized' || error.message === 'Failed to fetch'){
      return id === '' ? getCourses : getAbouteCourse;
    } else {
      console.error('ERROR: ',error);
    }
  }
}

export default GetCoursesOrCourse;
