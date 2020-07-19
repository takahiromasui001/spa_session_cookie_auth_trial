import React, { useContext } from 'react'
import Logout from '../Logout'
import { AuthContext } from '../AuthProvider'

const Header: React.FC = () => {
  const { authInfo } = useContext(AuthContext)

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ marginRight: 10 }}>SPA Auth Trial</h1>
      {authInfo.userId && <Logout />}
    </div>
  )
}
export default Header
