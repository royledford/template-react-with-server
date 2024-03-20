import AuthProvider from './providers/AuthProvider'
import Routes from './routes'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import CssBaseline from '@mui/material/CssBaseline'

// const retrievePosts = async () => {
//   const response = await fetch('http://localhost:8000/posts')
//   const data = await response.json()
//   return data
// }

export default function App() {
  // const { isLoading, data } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: retrievePosts,
  // })

  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* <div>
         {data && data.map((post) => <div key={post.id}>{post.title}</div>)}
      </div> */}
    </>
  )
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}
