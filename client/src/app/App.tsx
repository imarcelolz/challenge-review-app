import React from 'react'
import { Provider } from 'react-redux'
import { AppProps, connector } from './App.map';
import LoginPage from '../pages/login/Login'
import HomePage from '../pages/home/Home'

import './App.css'

const App: React.FC<AppProps> = (props) => {
  const RootComponent = props.authenticated ? HomePage : LoginPage

  return (
    <Provider store={props.store}>
    <div className="App">
      <RootComponent />
    </div>
    </Provider>
  )
}

export default connector(App);
