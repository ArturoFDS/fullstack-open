import Axios from "axios";

export function getAllPersons() {
  const response = Axios.get("http://localhost:3001/persons").then(
    (response) => response.data
  );
  return response;
}

export function addPersonAndNumber(data) {
  const response = Axios.post("http://localhost:3001/persons", data);
  return response;
}

export function deletePerson(id) {
  const response = Axios.delete(`http://localhost:3001/persons/${id}`);
  return response;
}

export function updatePerson(data, id) {
  const response = Axios.put(`http://localhost:3001/persons/${id}`, data);
  return response;
}
