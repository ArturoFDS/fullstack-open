import { useSelector, useDispatch } from "react-redux";
import { createNewAnecdoteAction } from "../actions/anecdoteReducer";
import { voteAnecdote } from "../actions/anecdoteReducer";
import CreateAnecdoteForm from "./components/AnecdoteForm";
import AnecdotesList from "./components/AnecdotesList";
import FilterAnecdotesInput from "./components/FilterAnecdotes";
import {
  createNotification,
  voteNotification,
} from "../actions/notificationReducer";
import Notification from "./components/Notification";
import { useState } from "react";
import { createAnecdotes } from "./services/fetchingBackend";
const App = () => {
  const [isNotification, setIsNotification] = useState(false);
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

  const createAnecdote = async (event, value) => {
    event.preventDefault();
    setIsNotification(true);
    setTimeout(() => {
      setIsNotification(false);
    }, 5000);
    dispatch(createNotification(value));
    dispatch(createNewAnecdoteAction(value));
    await createAnecdotes(value)
  };

  const voteAnecdoteFunction = (id, content) => {
    setIsNotification(true);
    setTimeout(() => {
      setIsNotification(false);
    }, 5000);
    console.log(content)
    dispatch(voteNotification(content));
    dispatch(voteAnecdote(id));
  };

  const handleFilterOnChange = (e) => {
    console.log(anecdotes.filter.filter);
    dispatch({
      type: "filtering/SET_FILTER",
      payload: { filter: e.target.value },
    });
  };

  return (
    <div>
      <FilterAnecdotesInput handleOnChangeF={handleFilterOnChange} />
      {isNotification && <Notification />}
      <AnecdotesList
        anecdotes={orderedAnecdotes}
        voteF={voteAnecdoteFunction}
      />
      <CreateAnecdoteForm createAnecdoteF={createAnecdote} />
    </div>
  );
};

export default App;
