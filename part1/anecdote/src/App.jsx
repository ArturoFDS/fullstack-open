import { useState } from "react";

const App = () => {
  const anecdotesArray = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const initialAnecdotes = anecdotesArray.map((anecdote) => ({
    anecdote,
    votes: 0,
  }));

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const handleOnClick = () => {
    setSelected(Math.floor(Math.random() * 8));
  };

  const handleVotes = (index) => {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[index].votes += 1;
    setAnecdotes(updatedAnecdotes);
  };

  return (
    <div>
      {anecdotes[selected].anecdote} With: {anecdotes[selected].votes} votes.
      <button onClick={() => handleVotes(selected)}>Vote</button>
      <button onClick={() => handleOnClick()}>Change anecdote</button>
    </div>
  );
};

export default App;
