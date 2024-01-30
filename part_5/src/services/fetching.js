import axios from "axios";

export function getBlogs() {
  const response = fetch("http://localhost:3000/api/blogs", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));
  return response;
}

export async function LoginUser({ username, password }) {
  const response = await axios.post("http://localhost:3000/api/users/login", {
    username,
    password,
  });
  return response;
}
