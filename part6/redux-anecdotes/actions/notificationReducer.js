export const voteNotification = (anecdote) => {
  return {
    type: "notificationMessage/VOTING_MESSAGE",
    payload: {
      anecdote,
    },
  };
};

export const createNotification = (anecdote) => {
    console.log(anecdote)
  return {
    type: "notificationMessage/CREATING_MESSAGE",
    payload: {
      anecdote
    },
  };
};
