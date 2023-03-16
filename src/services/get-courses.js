import { HOST, VERSION, COURSESPATH } from "./dotEnv";

const GetCourses = async (token) => {
  const url = HOST + VERSION + COURSESPATH;

  try {
    const response = await fetch(url, {method:'GET', headers: {Authorization: `Bearer ${token}`} });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default GetCourses;
