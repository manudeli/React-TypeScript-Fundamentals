import { Route, Switch } from 'react-router'
import DefaultTemplate from './components/template/DefaultTemplate'
import { PostPage, PostsPage, NotFound } from './pages'

interface Props {}

const App = (props: Props) => {
  return (
    <DefaultTemplate>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
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
