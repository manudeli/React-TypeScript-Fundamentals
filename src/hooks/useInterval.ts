import { useEffect } from 'react'
import useIntervalFn from './useIntervalFn'

const useInterval = (fn: () => void, second: number) => {
  const [run, clear] = useIntervalFn(fn, second)

  useEffect(() => {
    run()
    return clear
  }, [run, clear])

  return clear
}

export default useInterval
