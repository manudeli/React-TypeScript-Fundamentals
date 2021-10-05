import './Box.css'

interface Props {
  bgColor: string
}

const Box = ({ bgColor }: Props) => {
  return <div className="box" style={{ background: bgColor }}></div>
}

export default Box
