import { useState } from 'react'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <Box />
    </div>
  )
}

export default App
