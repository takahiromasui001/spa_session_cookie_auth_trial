import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Logout: React.FC = () => {
  const history = useHistory()
  const handleLogout = async () => {
    await axios
      .delete('http://127.0.0.1:3000/api/v1/logout', { withCredentials: true })
      .then(() => {
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
