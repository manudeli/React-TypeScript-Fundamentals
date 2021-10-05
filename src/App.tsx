// useCallback으로 부모의 state가 업데이트 되었을 때, 자식들이 모두 다시 업데이트 되는 것을 막아준다.

import { useCallback, useState } from 'react'
import Checkbox from './components/Checkbox'

function App() {
  const [foodOn, setFoodOn] = useState(false)
  const [clothesOn, setClothesOn] = useState(false)
  const [shelterOn, setShelterOn] = useState(false)

  const foodChange = useCallback((e) => setFoodOn(e.target.checked), [foodOn])
  const clothesChange = useCallback(
    (e) => setClothesOn(e.target.checked),
    [clothesOn]
  )
  const shelterChange = useCallback(
    (e) => setShelterOn(e.target.checked),
    [shelterOn]
  )

  return (
    <div>
      <Checkbox label="Food" on={foodOn} onChange={foodChange} />
      <Checkbox label="Clothes" on={clothesOn} onChange={clothesChange} />
      <Checkbox label="Shelter" on={shelterOn} onChange={shelterChange} />
    </div>
  )
}

export default App
