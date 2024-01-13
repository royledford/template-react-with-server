import { useAuth } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import LoginView from './LoginView'

export default function Login() {
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    setToken('test token')
    navigate('/', { replace: true })
  }

  // fake network delay
  // setTimeout(() => {
  //   handleLogin()
  // }, 1 * 1000)

  return <LoginView login={handleLogin} />
}
