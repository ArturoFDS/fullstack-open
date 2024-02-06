import { useState } from 'react'

function Counter ({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => {
    setCount((prev) => prev - 1)
  }
  const restart = () => {
    setCount(0)
  }
  const switchSigns = () => {
    setCount((prev) => prev * -1)
  }

  return (
    <div>
      <h1>
        Count: <span data-testid="count">{count}</span>
      </h1>
      <div>
        <button onClick={increment} className="Increment">
          Increment
        </button>
        <button onClick={decrement} className="Decrement">
          Decrement
        </button>
        <button onClick={restart} className="Restart">
          Restart
        </button>
        <button onClick={switchSigns} name="Switch Signs">
          Switch Signs
        </button>
      </div>
    </div>
  )
}

export default Counter
