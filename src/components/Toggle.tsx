import styled from '@emotion/styled'
import React, { ChangeEvent } from 'react'
import useToggle from '../hooks/useToggle'

interface Props {
  on: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  [x: string]: any
}

const Toggle = ({ on = false, onChange, ...props }: Props) => {
  const [checked, toggle] = useToggle(on)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggle()
    onChange && onChange(e)
  }

  return (
    <ToggleContainer {...props}>
      <ToggleInput type="checkbox" onChange={handleChange} checked={checked} />
      <ToggleSwitch />
    </ToggleContainer>
  )
}

export default Toggle

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`

const ToggleSwitch = styled.div`
  width: 54px;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background-color 0.2s;
  padding: 1px;

  &:after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s;
  }
`

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: lightgreen;
  }

  &:checked + div:after {
    left: calc(100% - 26px);
  }
`
