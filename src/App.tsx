import Checkbox from './components/Checkbox'
import useKeyPress from './hooks/useKeyPress'
import useToggle from './hooks/useToggle'

function App() {
  const [on, toggle] = useToggle(false)
  const keyPressed = useKeyPress('a')

  return (
    <div>
      <Checkbox label="하이" checked={on} onChange={toggle} />
      <Checkbox label="하이" checked={on} onChange={toggle} />
      <Checkbox label="하이" checked={on} onChange={toggle} />

      {keyPressed && 'Pressed'}
    </div>
  )
}

export default App
