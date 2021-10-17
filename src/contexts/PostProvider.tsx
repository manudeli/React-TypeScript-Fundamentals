import {
  useCallback,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { Post } from '../components/domain/PostItem'

const PostContext = createContext<{
  posts: Post[]
  onDeletePost?: (id: string) => Promise<void>
  onAddPost?: (form: {
    userId: number | string
    title: string
    body: string
  }) => Promise<void>
}>({
  posts: [],
})

export const usePostContext = () => useContext(PostContext)

enum Types {
  initPosts = 'INIT_POSTS',
  addPost = 'ADD_POST',
  deletePost = 'DELETE_POST',
}
type ActionType = Types
type Action = { type: ActionType; payload: any }
type ReducerState = Post[]

const reducer = (state: ReducerState = [], { type, payload }: Action) => {
  switch (type) {
    case Types.initPosts: {
      return payload
    }
    case Types.addPost: {
      return [...state, payload]
    }
    case Types.deletePost: {
      return state.filter(({ id }) => id !== payload.id)
    }
    default: {
      console.error('Wrong type')
      break
    }
  }
}

interface Props {
  children?: ReactNode
  initialPosts: Post[]
  handleDeletePost: (id: string) => Promise<{ id: string }>
  handleAddPost: (post: Post) => Promise<Post>
}

const PostProvider = ({
  children,
  initialPosts = [],
  handleDeletePost,
  handleAddPost,
}: Props) => {
  const [posts, dispatch] = useReducer<typeof reducer>(
    reducer,
    initialPosts || []
  )

  useEffect(() => {
    dispatch({ type: Types.initPosts, payload: initialPosts || [] })
  }, [initialPosts])

  const onAddPost = useCallback(
    async (post) => {
      const payload = await handleAddPost(post)
      dispatch({ type: Types.addPost, payload })
    },
    [handleAddPost]
  )

  const onDeletePost = useCallback(
    async (id) => {
      const payload = await handleDeletePost(id)
      dispatch({ type: Types.deletePost, payload })
    },
    [handleDeletePost]
  )

  return (
    <PostContext.Provider value={{ posts, onDeletePost, onAddPost }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
