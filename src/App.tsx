import { useState } from 'react'
import ShowSum from './components/ShowSum'

function App() {
  const [label, setLabel] = useState('Result')
  return (
    <div>
      <button onClick={() => setLabel(label + ':')}>Change Label</button>
      <ShowSum label={label} n={1000000000} />
    </div>
  )
}

export default App
