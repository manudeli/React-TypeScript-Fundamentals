import { useCallback, useState } from 'react'
import { Header, Spinner, Text } from '../..'
import { usePostContext } from '../../../contexts/PostProvider'

export interface Post {
  id: string
  title: string
  body: string
}

interface Props {
  post: Post
}

const PostItem = ({ post: { id, title, body } }: Props) => {
  const [loading, setLoading] = useState(false)
  const { onDeletePost } = usePostContext()

  const handleDeletePost = useCallback(
    async (id: string) => {
      setLoading(true)
      await onDeletePost!(id)
      setLoading(false)
    },
    [onDeletePost]
  )

  return (
    <div>
      <Header strong level={3}>
        {title}
      </Header>
      <Text>{body}</Text>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <button onClick={() => handleDeletePost(id)}>Delete</button>
        )}
      </div>
    </div>
  )
}

export default PostItem
