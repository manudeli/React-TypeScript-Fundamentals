import { useRef, useState } from 'react'

const AutoCounter = () => {
  const [count, setCount] = useState(0)
  const intervalId = useRef<NodeJS.Timeout | undefined>()

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
  }

  const handleStop = () => clearInterval(intervalId.current as NodeJS.Timeout)

  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default AutoCounter
