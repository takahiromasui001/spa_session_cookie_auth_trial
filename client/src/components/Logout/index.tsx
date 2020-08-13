import React, { useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Logout: React.FC = () => {
  const history = useHistory()
  const { setAuthInfo } = useContext(AuthContext)

  const handleLogout = async () => {
    await axios
      .delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
      .then(() => {
        setAuthInfo({ userId: null })
        history.push('/login')
      })
      .catch(() => {
        console.log('logout failed')
      })
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
export default Logout
