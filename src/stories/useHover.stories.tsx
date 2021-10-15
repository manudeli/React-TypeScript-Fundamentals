import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { RefObject } from 'react'
import useHover from '../hooks/useHover'

export default {
  title: 'Hook/useHover',
}

interface BoxProps {
  ref?: RefObject<HTMLDivElement>
}

const Box = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  background-color: red;
`

export const Default = () => {
  const [ref, hover] = useHover<HTMLDivElement>()

  return (
    <>
      <Box ref={ref} />
      {hover ? <div>Tooltip!</div> : null}
    </>
  )
}
