import { useCallback, useState } from 'react'

type InitialState = boolean
type ReturnType = [state: boolean, toggle: () => {}]

const useToggle = (initialState: InitialState) => {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState((state) => !state), [])

  return [state, toggle] as ReturnType
}

export default useToggle
