// Counter 컴포넌트의 기능
// 1. 증감하는 기능
// 2. 부모 컴포넌트의 메시지를 전달하는 기능
import { useState } from 'react'

interface Props {
  onIncrease: () => void
  onDecrease: () => void
}

function Counter({ onIncrease, onDecrease }: Props) {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
    if (onIncrease) {
      onIncrease()
    }
  }

  const handleDecrease = () => {
    setCount(count - 1)
    if (onDecrease) {
      onDecrease()
    }
  }

  return (
    <div>
      <span style={{ fontSize: 40 }}>{count}</span>

      <br />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default Counter
