import styled from '@emotion/styled'
import React from 'react'
import Task from './Task'

interface Props {}

const TaskList = ({}: Props) => {
  return (
    <UnorderedList>
      <Task content="Test" />
      <Task content="Test" />
      <Task content="Test" />
    </UnorderedList>
  )
}

export default TaskList

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`
