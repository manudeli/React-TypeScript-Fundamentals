import { useMemo } from 'react'

interface Props {
  label: string
  n: number
}

const ShowSum = ({ label, n }: Props) => {
  // n이 변경되었을 때만 재연산
  const result = useMemo(() => sum(n), [n])

  return (
    <span>
      {label}: {result}
    </span>
  )
}

function sum(n: number) {
  console.log('start')
  let result = 0
  for (let i = 1; i <= n; i += 1) {
    result += i
  }
  console.log('Finished')
  return result
}

export default ShowSum
