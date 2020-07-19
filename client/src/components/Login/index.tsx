import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory()
  const handleLogin = async () => {
    await axios
      .post(
        'http://127.0.0.1:3000/api/v1/login',
        {
          name: 'user1',
          password: '1111',
        },
        { withCredentials: true }
      )
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        console.log('login failed')
      })
  }

  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login
