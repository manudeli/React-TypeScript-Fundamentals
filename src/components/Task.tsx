import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { useTasks } from '../contexts/TaskProvider'
import Toggle from './Toggle'

interface Props {
  content: ReactNode
  complete?: boolean
  [x: string]: any
}

const Task = ({ id, content, complete = false, ...props }: Props) => {
  const { updateTask, removeTask } = useTasks()

  return (
    <ListItem {...props}>
      <Toggle on={complete} onChange={(e) => updateTask(id, e.target.value)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>
  )
}

export default Task

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }: { complete: boolean }) =>
    complete ? 'line-through' : 'none'};
`

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`
