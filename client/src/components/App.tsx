import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import MyPage from './MyPage'
import AuthController from './AuthController'
import Company from './Company'
import AuthProvider from './AuthProvider'

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthController>
              <Route path="/companies" component={Company} />
              <Route path="/" component={MyPage} />
            </AuthController>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
