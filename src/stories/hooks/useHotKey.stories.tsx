import { useState } from 'react'
import { useHotKey } from '../../hooks'

export default {
  title: 'Hook/useHotKey',
}

export const Default = () => {
  const [value, setValue] = useState('')
  const hotkeys = [
    {
      global: true,
      combo: 'meta+shift+k',
      onKeyDown: () => {
        alert('meta+shift+k')
      },
    },
    {
      global: false,
      combo: 'esc',
      onKeyDown: () => {
        setValue('')
      },
    },
  ]

  const { handleKeyDown } = useHotKey(hotkeys)

  return (
    <div>
      <h1>useHotKey 테스트 리스트</h1>
      <ol>
        {hotkeys.map(({ combo }, index) => (
          <li key={index}>{combo}</li>
        ))}
      </ol>
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
