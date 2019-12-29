import React from 'react'
import { LoginProps, connector } from './Login.map'

const LoginPage: React.FC<LoginProps> = (props) => {
  const error = props.error && <div>{props.error}</div>

  return <React.Fragment>
    {error}
    <div>
      <label>Username</label>
      <input type="text" onChange={e => props.updateUsername(e.target.value)}/>
    </div>
    <div>
      <label>Passowrd</label>
      <input type="password"  onChange={e => props.updatePassword(e.target.value)}/>
    </div>
    <div>
      <button onClick={props.login}>Login</button>
    </div>
  </React.Fragment>
}

export default connector(LoginPage)
