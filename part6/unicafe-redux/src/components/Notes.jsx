import React from 'react'
import store from '../../store/notesReducer'

const Notes = () => {
  store.dispatch({
    type: 'NEW_NOTE',
    payload: {
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  })

  store.dispatch({
    type: 'NEW_NOTE',
    payload: {
      content: 'state changes are made with actions',
      important: false,
      id: 2
    }
  })
  return (
    <div>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
            <button
              onClick={(e) =>
                store.dispatch({
                  type: 'CHANGE_IMPORTANCE',
                  payload: { id: note.id }
                })
              }
            >
              Change importance
            </button>
          </li>
        ))}
      </ul>
      <section>
        <button
          onClick={() =>
            store.dispatch({
              type: 'NEW_NOTE',
              payload: {
                content: 'State changes are made with lives',
                important: false,
                id: 3
              }
            })
          }
        >
          Create new note
        </button>
      </section>
    </div>
  )
}

export default Notes
