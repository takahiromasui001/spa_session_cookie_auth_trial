import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import MyPage from './MyPage'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MyPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
