import { useCallback, useEffect, useRef, useState } from 'react'

const useHover = <T extends HTMLElement>() => {
  const [state, setState] = useState(false)
  const ref = useRef<T>(null)

  const handleMouseOver = useCallback(() => setState(true), [])
  const handleMouseOut = useCallback(() => setState(false), [])

  useEffect(() => {
    const element = ref.current
    if (element) {
      element.addEventListener('mouseover', handleMouseOver)
      element.addEventListener('mouseout', handleMouseOut)
    }
    return () => {
      element?.removeEventListener('mouseover', handleMouseOver)
      element?.removeEventListener('mouseout', handleMouseOut)
    }
  }, [ref])

  return [ref, state]
}

export default useHover
