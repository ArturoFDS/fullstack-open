import { useSelector, useDispatch } from "react-redux";
import { createNewAnecdote, voteAnecdote } from "../actions/anecdoteReducer";
import CreateAnecdoteForm from "./components/AnecdoteForm";
import AnecdotesList from "./components/AnecdotesList";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const orderedAnecdotes = anecdotes?.sort((a, b) => b.votes - a.votes);

  const createAnecdote = (event, value) => {
    event.preventDefault();
    dispatch(createNewAnecdote(value));
  };

  const voteAnecdoteFunction = (id) => {
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      <AnecdotesList
        anecdotes={orderedAnecdotes}
        voteF={voteAnecdoteFunction}
      />
      <CreateAnecdoteForm createAnecdoteF={createAnecdote} />
    </div>
  );
};

export default App;
