/* 
  Axios helper function to help with server authentication.
  Uses the JWT in localStorage to authenticate with the API endpoints
*/
import axios from "axios";

export default function() {
  const token = localStorage.getItem("userToken");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
}
