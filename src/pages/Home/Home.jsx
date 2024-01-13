import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

export default function Home() {
  const { token, removeToken } = useAuth()

  console.log('token', token) // TODO: remove this

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <h1>Home Page</h1>
      {token ? (
        <button onClick={removeToken}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  )
}
