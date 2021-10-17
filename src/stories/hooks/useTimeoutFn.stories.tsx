import useTimeoutFn from '../../hooks/useTimeoutFn'

export default {
  title: 'Hook/useTimeoutFn',
}

export const Default = () => {
  const time = 3000
  const completedText = '완료!'

  const [run, clear] = useTimeoutFn(() => {
    alert(completedText)
  }, time)

  return (
    <>
      <div>useTimeoutFn 테스트</div>
      <button onClick={run}>
        {time}초 뒤 {completedText} 메시지를 보여줌
      </button>
      <button onClick={clear}>멈춰!</button>
    </>
  )
}
