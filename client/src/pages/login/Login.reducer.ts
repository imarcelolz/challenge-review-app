import { handleActions } from 'redux-actions';
import { actions } from './Login.actions'
import { StateProps } from './Login.map';

const initialState: StateProps = {
  email: '',
  password: '',
  loading: false,
  error: ''
}

export const loginReducer = handleActions<StateProps>({
  [actions.request as any]: (state: StateProps) => ({ ...state, loading: true }),

  [actions.success as any]: (state: StateProps) => ({ ...state, loading: false }),

  [actions.error as any]: (state: StateProps, action: any) =>
    ({ ...state, loading: false, error: action.payload.error }),

  [actions.updatePassword as any]: (state: StateProps, action: any) =>
    ({ ...state, password: action.payload.value }),

  [actions.updateUsername as any]: (state: StateProps, action: any) =>
    ({ ...state, username: action.payload })

}, initialState)
