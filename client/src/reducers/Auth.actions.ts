import { createAction } from 'redux-actions'

export const actions = {
  loggedIn: createAction('app/loggedIn'),
  loggedOut: createAction('app/loggedOut')
};
