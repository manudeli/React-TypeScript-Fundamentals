import { RefObject } from 'react'
import Box from './components/Box'
import Checkbox from './components/Checkbox'
import useHover from './hooks/useHover'
import useToggle from './hooks/useToggle'

function App() {
  const [on, toggle] = useToggle(false)
  const [ref, isHover] = useHover()

  return (
    <div>
      <Checkbox label="하이" checked={on} onChange={toggle} />
      <Checkbox label="하이" checked={on} onChange={toggle} />
      <Checkbox label="하이" checked={on} onChange={toggle} />
      {isHover ? 'hover' : 'mouseout'}
      <Box ref={ref as RefObject<HTMLDivElement>} />
    </div>
  )
}

export default App
