import axios from 'axios'
import { Fragment } from 'react'
import { useParams } from 'react-router'
import { Header, Spinner, Text } from '../components'
import { useAsync } from '../hooks'

const PostPage = () => {
  const { postId } = useParams<{ postId: string }>()

  const { isLoading, value } = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.data)
  }, [postId])

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Header strong>{value?.title}</Header>
          <Text>{value?.body}</Text>
        </Fragment>
      )}
    </div>
  )
}

export default PostPage
