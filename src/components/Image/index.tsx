interface Props {
  block?: boolean
  src: string
  width?: number | 'auto'
  height?: number
  alt: string
  mode?: 'cover' | 'fill' | 'contain'
  [x: string]: any
}

const Image = ({
  block,
  src,
  width,
  height,
  alt,
  mode = 'cover',
  ...props
}: Props) => {
  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode,
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{
        ...props.style,
        ...imageStyle,
      }}
    />
  )
}

export default Image
