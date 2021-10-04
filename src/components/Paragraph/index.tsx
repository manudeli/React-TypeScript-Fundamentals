import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  size?: number
  color?: string
}

function Paragraph({ children, size = 16, color = 'black' }: Props) {
  return <p style={{ fontSize: size, color }}>{children}</p>
}

export default Paragraph
