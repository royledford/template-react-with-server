import { useAuth } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const setToken = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    setToken() // remove token from local storage
    navigate('/', { replace: true })
  }

  // fake network delay
  setTimeout(() => {
    handleLogout()
  }, 3 * 1000)

  return <>Logout Page</>
}
