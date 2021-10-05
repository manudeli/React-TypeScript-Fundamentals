import { ChangeEvent, memo } from 'react'

interface Props {
  label: string
  on?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = memo(({ label, on, onChange }: Props) => {
  console.log(label, on)

  return (
    <span>
      {label}
      <input type="checkbox" defaultChecked={on} onChange={onChange} />
    </span>
  )
})

export default Checkbox
