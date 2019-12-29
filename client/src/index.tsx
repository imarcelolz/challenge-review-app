import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { appReducer } from './app/App.reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import { AppState } from 'app/App.map'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
)

ReactDOM.render(<App store={store}/>, document.getElementById('root'))
