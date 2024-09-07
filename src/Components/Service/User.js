import axios from "axios";

export function Insert(user) {
  return axios.post('http://localhost:5000/user',user)
}


export function Login(user) {
  return axios.post('http://localhost:5000/login',user)
}

 
export function UserData(user) {
  return axios.get(`http://localhost:5000/user/email/${user}`)
}

