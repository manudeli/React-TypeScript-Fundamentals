import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <>
      Input:
      <input ref={ref} />
    </>
  )
})

export default Input
