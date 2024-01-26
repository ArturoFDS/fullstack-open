import Axios from "axios";

export function getAllPersons() {
  const response = Axios.get(
    "https://fso-phonebook-backend-m4ty.onrender.com/api/persons"
  ).then((response) => response.data.data);
  return response;
}

export function addPersonAndNumber(data) {
  const response = Axios.post(
    "https://fso-phonebook-backend-m4ty.onrender.com/api/persons/create",
    data
  );
  return response;
}

export function deletePerson(id) {
  const response = Axios.delete(
    `https://fso-phonebook-backend-m4ty.onrender.com/api/persons/delete/${id}`
  ).then((response) => response);
  console.log(response);
  return response;
}

export function updatePerson(data, id) {
  const response = Axios.put(
    `https://fso-phonebook-backend-m4ty.onrender.com/api/persons/update/${id}`,
    data
  );
  return response;
}
