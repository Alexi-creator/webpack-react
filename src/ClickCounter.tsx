import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  const test = 'test2'
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Count {count} {test}
      </button>
    </div>
  )
}
