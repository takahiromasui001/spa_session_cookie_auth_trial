import React, { createContext, useState } from 'react'

type TAuthProviderProps = {
  children: React.ReactNode
}

type TAuthContext = {
  authInfo: TAuthInfo
  setAuthInfo: React.Dispatch<React.SetStateAction<TAuthInfo>>
}

type TAuthInfo = {
  userId: number | null
}

export const AuthContext = createContext({} as TAuthContext)

const AuthProvider: React.FC<TAuthProviderProps> = (props) => {
  const [authInfo, setAuthInfo] = useState<TAuthInfo>({ userId: null })

  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
