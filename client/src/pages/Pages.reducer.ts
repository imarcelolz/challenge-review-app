import { combineReducers } from 'redux';
import { homeReducer } from '../pages/home/Home.reducer'
import { loginReducer } from '../pages/login/Login.reducer'

export const pagesReducer = combineReducers({
  login: loginReducer,
  home: homeReducer
})
