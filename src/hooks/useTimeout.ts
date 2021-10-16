import { useEffect } from 'react'
import useTimeoutFn from './useTimeoutFn'

const useTimeout = (fn: () => void, second: number) => {
  const [run, clear] = useTimeoutFn(fn, second)

  useEffect(() => {
    run()
    return clear
  }, [run, clear])

  return clear
}

export default useTimeout
