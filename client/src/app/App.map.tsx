import { Store } from 'redux'
import { connect } from 'react-redux';
import { appReducer } from './App.reducer'

export type AppState = ReturnType<typeof appReducer>

export interface AppProps {
  store: Store<AppState>,
  authenticated: boolean
}

const mapState = (rootState: AppState) => ({
  authenticated: rootState.auth.authenticated
})

export const connector = connect(mapState)
