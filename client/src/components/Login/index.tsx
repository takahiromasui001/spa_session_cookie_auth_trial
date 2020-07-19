import React, { useContext } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

type TAPIV1SessionsCreate = {
  message: string
  userId: number | null
}

const Login: React.FC = () => {
  const history = useHistory()
  const { setAuthInfo } = useContext(AuthContext)
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
      .then((response: AxiosResponse<TAPIV1SessionsCreate>) => {
        setAuthInfo({ userId: response.data.userId })
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