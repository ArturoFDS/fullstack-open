export function getBlogs() {
  const response = fetch("http://localhost:3000/api/blogs", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));
    return response
}
