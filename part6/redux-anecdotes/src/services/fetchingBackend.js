import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = async () => {
  const serverResponse = await axios.get(baseUrl);
  return serverResponse.data;
};
export const createAnecdotes = (anecdote) => {
  console.log(anecdote);
  axios.post(baseUrl, anecdote).then((response) => response.data);
};
