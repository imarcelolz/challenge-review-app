import { handleActions } from 'redux-actions'
import { actions } from './Auth.actions'

export interface AuthState {
  authenticated: boolean
};

export const authReducer = handleActions<AuthState>({
  [actions.loggedIn as any]: (state: AuthState) => ({ ...state, authenticated: true }),
  [actions.loggedOut as any]: (state: AuthState) => ({ ...state, authenticated: false })
}, { authenticated: false })
