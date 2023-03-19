import { HOST, VERSION, AUTHPATH } from "./dot-env";

const Auth = async () => {
  const url = HOST + VERSION + AUTHPATH;

  let token = localStorage.getItem('token');
  if (!token) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      token = data.token;
      localStorage.setItem('token', token);
    } catch (error) {
      //console.error(error);
    }
  }
  return token;

}

export default Auth;
