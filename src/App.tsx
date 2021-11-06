import { useRef } from 'react'
import { Route, Switch } from 'react-router'
import Input, { InputHandles } from './components/Input'
import DefaultTemplate from './components/template/DefaultTemplate'
import { PostPage, PostsPage, NotFound } from './pages'

interface Props {}

const App = (props: Props) => {
  const inputRef = useRef<InputHandles>(null)

  return (
    <DefaultTemplate>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
          <Input ref={inputRef} />
          <button onClick={() => inputRef.current?.focus()}>Focus</button>
          <button onClick={() => inputRef.current?.clear()}>Clear</button>
        </Route>
        <Route path="/posts" exact>
          <PostsPage />
        </Route>
        <Route path="/posts/:postId" exact>
          <PostPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </DefaultTemplate>
  )
}

export default App
