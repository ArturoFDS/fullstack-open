const getId = () => (100000 * Math.random()).toFixed(0);

export function voteAnecdote(id) {
  return {
    type: "VOTING",
    payload: {
      id: id,
    },
  };
}

export function createNewAnecdote(anecdote) {
  return {
    type: "NEW_ANECDOTE",
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0,
    },
  };
}
