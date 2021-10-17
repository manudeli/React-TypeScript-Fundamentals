import React from 'react'
import { Spinner } from '../..'
import { usePostContext } from '../../../contexts/PostProvider'
import { useForm } from '../../../hooks'

interface Form {
  userId: number
  title: string
  body: string
}

const PostAddForm = () => {
  const { onAddPost } = usePostContext()

  const { isLoading, errors, handleChange, handleSubmit } = useForm<Form>({
    initialValues: { userId: 1, title: '', body: '' },
    onSubmit: async (values) => {
      await onAddPost!(values)
    },
    validate: ({ title, body }) => {
      const errors = {} as Form
      if (!title) errors.title = '제목을 입력해주세요.'
      if (!body) errors.body = '내용을 입력해주세요.'
      return errors
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="title" onChange={handleChange} />
        {errors.title}
      </div>
      <div>
        <input type="text" name="body" onChange={handleChange} />
        {errors.body}
      </div>
      {isLoading ? <Spinner /> : <button type="submit">Add</button>}
    </form>
  )
}

export default PostAddForm
