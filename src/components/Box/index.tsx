import styled from '@emotion/styled'

interface Props {
  bgColor: string
}

const Box = ({ bgColor }: Props) => {
  return <StyledBox className="box" style={{ background: bgColor }}></StyledBox>
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: cyan;
`

export default Box
