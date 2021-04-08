import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactNotification from 'react-notifications-component'
import './index.css'
import 'react-notifications-component/dist/theme.css'

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'

import store from './store'



function App() {
  return (
    <Provider store={store}>
      <ReactNotification />
      <Router>
        <Route exact path='/'  component={Login}/>
        <Route exact path='/home'  component={Home}/>
        <Route exact path='/posts/:username'  component={Profile}/>
        <Route exact path='/register'  component={Register}/>
      </Router>
    </Provider>
  );
}

export default App;