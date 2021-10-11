import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface TaskState {
  id: string
  content: string
  complete: boolean
}

interface ProviderProps {
  children: ReactNode
}

type ContextProps = {
  tasks: TaskState[]
  [x: string]: any
}

const TaskContext = createContext<ContextProps>({ tasks: [] })
export const useTasks = () => useContext<ContextProps>(TaskContext)

const TaskProvider = ({ children }: ProviderProps) => {
  const [tasks, setTasks] = useState<TaskState[]>([])

  const addTask = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content,
        complete: false,
      },
    ])
  }

  const updateTask = (id: string, status: boolean) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    )
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
