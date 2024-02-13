const getId = () => (100000 * Math.random()).toFixed(0);

export function voteAnecdote(id) {
  return {
    type: "anecdotes/changeAnecdote",
    payload: {
      id: id,
    },
  };
}

export function createNewAnecdoteAction(anecdote) {
  return {
    type: "anecdotes/createNewAnecdote",
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0,
    },
  };
}
