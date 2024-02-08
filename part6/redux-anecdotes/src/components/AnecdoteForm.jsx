/* eslint-disable react/prop-types */
import {useState} from "react";

const CreateAnecdoteForm = ({createAnecdoteF}) => {
    const [newAnecdoteValue, setNewAnecdoteValue] = useState('')
  return (
    <div>
        <h2>Create New Anecdote</h2>
    <form>
      <div>
        <input
          name="anecdote"
          onChange={(e) => setNewAnecdoteValue(e.target.value)}
        />
      </div>
      <button onClick={(e) => createAnecdoteF(e, newAnecdoteValue)}>create</button>
    </form>
    </div>
  );
};

export default CreateAnecdoteForm;
