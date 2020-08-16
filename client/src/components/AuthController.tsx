import React, { useEffect, useContext } from 'react'
import { useHistory, Switch } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { AuthContext } from './AuthProvider'

type TAPIV1SessionsShow = {
  message: string
  userId: number | null
}

type TAuthController = {
  children?: React.ReactElement[]
}

const AuthController: React.FC<TAuthController> = (props) => {
  const { children } = props
  const history = useHistory()
  const { setAuthInfo } = useContext(AuthContext)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await axios
        .get('http://localhost:3000/api/v1/logged_in', {
          withCredentials: true,
        })
        .then((response: AxiosResponse<TAPIV1SessionsShow>) => {
          setAuthInfo({ userId: response.data.userId })
          axios.defaults.headers.common['x-csrf-token'] =
            response.headers['x-csrf-token']
        })
        .catch(() => history.push('/login'))
    }
    fetchCurrentUser()
  }, [history, setAuthInfo])

  return <Switch>{children}</Switch>
}

export default AuthController
