import logo from './logo.svg'

interface Props {
  size?: number
}

function Logo({ size = 200 }: Props) {
  return (
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      style={{
        width: size,
        height: size,
      }}
    />
  )
}

export default Logo
