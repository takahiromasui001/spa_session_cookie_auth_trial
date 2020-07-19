import React, { useEffect } from 'react'
import { useHistory, Switch } from 'react-router-dom'
import axios from 'axios'

type TAuthController = {
  children?: React.ReactElement[]
}

const AuthController: React.FC<TAuthController> = (props) => {
  const { children } = props
  const history = useHistory()

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await axios
        .get('http://127.0.0.1:3000/api/v1/current_user', {
          withCredentials: true,
        })
        .catch(() => history.push('/login'))
    }
    fetchCurrentUser()
  }, [history])

  return <Switch>{children}</Switch>
}

export default AuthController
