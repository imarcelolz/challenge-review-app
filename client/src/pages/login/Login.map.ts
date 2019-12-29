import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '../../app/App.map'
import { actions } from './Login.actions'

export interface StateProps {
  loading: boolean,
  email: string,
  password: string,
  error: string,
}

export interface DispatchProps {
  login: () => void,
  updatePassword: (value: string) => void,
  updateUsername: (value: string) => void
}

const mapState = (appState: AppState) => {
  const state = appState.pages.login

  return {
    email: state.email,
    password: state.password,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatch = (dispatch: any): DispatchProps => ({
  login: bindActionCreators(actions.login, dispatch),
  updatePassword: bindActionCreators(actions.updatePassword, dispatch),
  updateUsername: bindActionCreators(actions.updateUsername, dispatch)
})

export const connector = connect<StateProps, DispatchProps>(mapState, mapDispatch)
export type LoginProps = ConnectedProps<typeof connector>
