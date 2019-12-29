import { createAction } from 'redux-actions'
import { actions as authActions } from '../../reducers/Auth.actions'

export const actions = {
  request: createAction('login/request'),
  success: createAction('login/success'),
  error: createAction('login/error'),
  updatePassword: createAction('login/updatePassword'),
  updateUsername: createAction('login/updateUsername'),

  login: () => async (dispatch: any) => {
    try {
      debugger
      dispatch(actions.request)

      dispatch(actions.success)
      dispatch(authActions.loggedIn)
    }
    catch(e) {
      dispatch(actions.error, e)
    }
  }
}
