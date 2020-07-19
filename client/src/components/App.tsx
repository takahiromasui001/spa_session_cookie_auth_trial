import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import MyPage from './MyPage'
import AuthController from './AuthController'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <AuthController>
            <Route path="/" component={MyPage} />
          </AuthController>
        </Switch>
      </Router>
    </div>
  )
}

export default App
