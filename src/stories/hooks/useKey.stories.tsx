import useKey from '../../hooks/useKey'

export default {
  title: 'Hook/useKey',
}

export const Default = () => {
  useKey('keydown', 'f', () => {
    alert('f key down')
  })
  useKey('keyup', 'q', () => {
    alert('f key up')
  })
  return <>useKey</>
}
