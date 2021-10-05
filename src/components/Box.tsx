interface Props {
  width: number
  height: 12 | 32
  backgroundColor: 'red' | 'blue'
}

const Box = ({ width = 100, height = 32, backgroundColor = 'red' }: Props) => {
  const style = {
    width,
    height,
    backgroundColor,
  }
  return <div style={style}> </div>
}

export default Box
