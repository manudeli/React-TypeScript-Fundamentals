import { useEffect } from 'react'
import useTimeoutFn from './useTimeoutFn'

const useDebounce = (
  fn: () => void,
  second: number,
  deps: any[] | undefined
) => {
  const [run, clear] = useTimeoutFn(fn, second)

  // eslint-disable-next-line
  useEffect(run, deps)

  return clear
}

export default useDebounce
