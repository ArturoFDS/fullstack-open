const AnecdotesList = ({anecdotes, voteF}) => {
  console.log(anecdotes)
  return (
    <div><h2>Anecdotes</h2>
    {anecdotes?.map((anecdote) => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteF(anecdote.id)}>
            vote
          </button>
        </div>
      </div>
    ))}</div>
  )
}

export default AnecdotesList