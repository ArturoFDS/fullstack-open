import store from '../store/counterReducer'
import Notes from './components/Notes'

const App = () => {
  return (
    <div>
      <section>
        <h1>{store.getState()}</h1>
      </section>
      <section>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
          Increment by one
        </button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
          Decrement by one
        </button>
        <button onClick={() => store.dispatch({ type: 'ZERO' })}>
          Reset to Zero
        </button>
      </section>

      <section>
        <Notes />
      </section>
    </div>
  )
}

export default App
