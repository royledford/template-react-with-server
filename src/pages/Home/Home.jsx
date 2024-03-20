import { useAuth } from '../../providers/AuthProvider'
import PostsApi from '@services/posts'
import useQuery from '../../hooks/useQuery'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const { token, removeToken } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  // const { data, isLoading } = useQuery(['posts'], () => PostsApi.all())

  return (
    <Box
      maxWidth='600px'
      p={4}
      sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Home
      </Typography>

      <Button onClick={handleLogout}>Logout</Button>

      <Typography variant='p' gutterBottom sx={{ fontWeight: '700' }}>
        Some data
      </Typography>
      {isLoading && <p>Loading...</p>}
      {data && data.map((post) => <p key={post.id}>{post.title}</p>)}
    </Box>
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   }}
    // >
    //   <h1>Home Page</h1>
    //   {token ? (
    //     <button onClick={removeToken}>Logout</button>
    //   ) : (
    //     <Link to='/login'>Login</Link>
    //   )}
    // </div>
  )
}
