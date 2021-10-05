interface Props {
  label: string
  checked: boolean
  onChange: () => {}
}

const Checkbox = ({ label = 'Label', checked = false, onChange }: Props) => {
  return (
    <label>
      {label}
      <input type="checkbox" defaultChecked={checked} onChange={onChange} />
    </label>
  )
}

export default Checkbox
