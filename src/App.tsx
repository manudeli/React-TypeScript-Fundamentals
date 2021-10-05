import Checkbox from './components/Checkbox'
import useToggle from './hooks/useToggle'

function App() {
  const [on, toggle] = useToggle(false)

  console.log(on)

  return (
    <div>
      <Checkbox label="하이" checked={on} onChange={toggle} />
      <Checkbox label="하이" checked={on} onChange={toggle} />
      <Checkbox label="하이" checked={on} onChange={toggle} />
    </div>
  )
}

export default App
