import styled from '@emotion/styled'
import React from 'react'
import Task from './Task'
import { useTasks } from '../contexts/TaskProvider'

interface Props {}

const TaskList = ({}: Props) => {
  const { tasks } = useTasks()

  return (
    <UnorderedList>
      {tasks.map(({ id, content, complete }) => (
        <Task key={id} id={id} content={content} complete={complete} />
      ))}
    </UnorderedList>
  )
}

export default TaskList

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-child) {
      margin-top: 8px;
    }
  }
`
