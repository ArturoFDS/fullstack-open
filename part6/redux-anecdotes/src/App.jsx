import { useSelector, useDispatch } from "react-redux";
import { createNewAnecdoteAction } from "../actions/anecdoteReducer";
import { voteAnecdote } from "../actions/anecdoteReducer";
import CreateAnecdoteForm from "./components/AnecdoteForm";
import AnecdotesList from "./components/AnecdotesList";
import FilterAnecdotesInput from "./components/FilterAnecdotes";
const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    return state.filter.filter
      ? state.anecdotes.filter((anecdote) =>
          anecdote.content
            .toLowerCase()
            .includes(state.filter.filter.toLowerCase())
        )
      : state.anecdotes;
  });
  const orderedAnecdotes = [...anecdotes]?.sort((a, b) => b.votes - a.votes);

  const createAnecdote = (event, value) => {
    event.preventDefault();
    dispatch(createNewAnecdoteAction(value));
  };

  const voteAnecdoteFunction = (id) => {
    dispatch(voteAnecdote(id));
  };

  const handleFilterOnChange = (e) => {
    console.log(anecdotes.filter.filter);
    dispatch({
      type: "SET_FILTER",
      payload: { filter: e.target.value },
    });
  };

  return (
    <div>
      <FilterAnecdotesInput handleOnChangeF={handleFilterOnChange} />
      <AnecdotesList
        anecdotes={orderedAnecdotes}
        voteF={voteAnecdoteFunction}
      />
      <CreateAnecdoteForm createAnecdoteF={createAnecdote} />
    </div>
  );
};

export default App;
