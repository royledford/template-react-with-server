import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import PostsApi from '@services/posts'
import useQuery from '../../hooks/useQuery'

export default function Home() {
  const { token, removeToken } = useAuth()

  const { data, isLoading } = useQuery(['posts'], () => PostsApi.all())
  console.log('data', data) // TODO: remove this

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Home Page</h1>
      {token ? (
        <button onClick={removeToken}>Logout</button>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </div>
  )
}
