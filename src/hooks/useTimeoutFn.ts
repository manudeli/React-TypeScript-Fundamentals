import { useCallback } from '@storybook/client-api'
import { useEffect, useRef } from 'react'

const useTimeoutFn = (fn: () => void, second: number) => {
  const timeoutId = useRef<NodeJS.Timeout>()
  const callback = useRef(fn)

  useEffect(() => {
    callback.current = fn
  }, [fn])

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current)

    timeoutId.current = setTimeout(() => {
      callback.current()
    }, second * 1000)
  }, [second])

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current)
  }, [])

  useEffect(() => clear, [clear])

  return [run, clear]
}

export default useTimeoutFn
