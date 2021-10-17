import { useCallback } from 'react'
import axios from 'axios'
import { useAsync } from '../hooks'
import { Header, Spinner } from '../components'
import PostList from '../components/domain/PostList'
import PostProvider from '../contexts/PostProvider'
import PostAddForm from '../components/domain/PostAddForm'
import { Post } from '../components/domain/PostItem'

// 컴포넌트는 최대한 순수할수록 좋습니다.
// 1. 사이드 이펙트를 걱정하지 않아도 됩니다.
// 2. 확장에 유연합니다.
// 3. 테스트가 쉽습니다.

const REQUEST_URL = 'https://jsonplaceholder.typicode.com'

function PastsPage() {
  const { isLoading, value } = useAsync(async () => {
    return await axios
      .get(`${REQUEST_URL}/posts`)
      .then((response) => response.data)
  }, [])

  const handleAddPost = useCallback(async (post: Post) => {
    return (await axios
      .post(`${REQUEST_URL}/posts`, post)
      .then((response) => response.data)) as Post
  }, [])

  const handleDeletePost = useCallback(async (id: string) => {
    return await axios.delete(`${REQUEST_URL}/posts/${id}`).then(() => ({ id }))
  }, [])

  return (
    <PostProvider
      initialPosts={value!}
      handleDeletePost={handleDeletePost}
      handleAddPost={handleAddPost}
    >
      <div>
        <Header>Posts</Header>
        <PostAddForm />
        {isLoading ? <Spinner /> : <PostList />}
      </div>
    </PostProvider>
  )
}

export default PastsPage
