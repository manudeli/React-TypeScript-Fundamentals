/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react'
import Box from './components/Box'
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
`

interface SomeComponentProps {
  children?: ReactNode
}

const SomeComponent = ({ children }: SomeComponentProps) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

function App() {
  return (
    <div>
      <SomeComponent />
      <Box bgColor="red" />
    </div>
  )
}

export default App
