import { DependencyList, useEffect } from 'react'
import useAsyncFn, { AsyncFn } from './useAsyncFn'

const useAsync = (fn: AsyncFn, deps: DependencyList) => {
  const [state, callback] = useAsyncFn(fn, deps)

  useEffect(() => {
    callback()
  }, [callback])

  return state
}

export default useAsync
