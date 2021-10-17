import { RefObject } from 'react'
import styled from '@emotion/styled'
import { useScroll } from '../../hooks'

export default {
  title: 'Hook/useScroll',
}

interface BoxProps {
  ref?: RefObject<HTMLDivElement>
}

const Box = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  background-color: red;
  overflow: auto;
`

const Inner = styled.div`
  width: 10000px;
  height: 10000px;
  background-image: linear-gradient(18deg, #000 0%, #fff 100%);
`

export const Default = () => {
  const [ref, coord] = useScroll<HTMLDivElement>()

  return (
    <>
      <Box ref={ref}>
        <Inner />
      </Box>
      <button
        onClick={() => {
          ref.current?.scrollTo({ top: 20000, left: 20000, behavior: 'smooth' })
        }}
      >
        Scroll
      </button>
      {coord.x}, {coord.y}
    </>
  )
}
