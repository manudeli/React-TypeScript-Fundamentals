import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`Clicked ${count} times.`)
  }, [count]) // count의 변화를 감지한다.

  useEffect(() => {
    console.log('Component Loaded')
    const handleScroll = () => {
      console.log(window.scrollY)
    }

    document.addEventListener('scroll', handleScroll) // 전역적인 이벤트를 사용할 때 쓸 수 있다.
    return () => document.removeEventListener('scroll', handleScroll) // return으로 반환한 함수는 컴포넌트가 제거될 때 실행된다.
  }, []) // 컴포넌트가 처음 로드될 때 실행된다.

  return (
    <div className="App">
      <div>You clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <div style={{ height: 10000 }}></div>
    </div>
  )
}

export default App
