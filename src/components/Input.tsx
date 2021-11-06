import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'

interface Props {}

export type InputHandles = {
  clear: () => void
  focus: () => void
}

const Input = forwardRef((_: Props, ref: Ref<InputHandles>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current!.value = ''
    },
    focus: () => {
      inputRef.current!.focus()
    },
  }))

  return (
    <>
      Input: <input ref={inputRef} />
    </>
  )
})

export default Input
