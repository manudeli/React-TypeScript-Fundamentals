import { memo } from 'react'

const Box = memo(() => {
  console.log('Render box')

  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
  return <div style={style}></div>
})

export default Box
