import { combineReducers } from 'redux'
import { pagesReducer } from '../pages/Pages.reducer'
import { authReducer } from '../reducers/Auth.reducer'

export const appReducer = combineReducers({
  auth: authReducer,
  pages: pagesReducer
})
