import { BaseService } from './Base.service';
import { Config } from '../Config';

export interface User {
  Name: string
  AuthToken: string
}

export class AuthService extends BaseService {

  async login(username: string, password: string): Promise<User> {
    const response = await this.httpClient.post<User>('auth', { username, password })

    const user = response.data
    this.setAuthToken(user.AuthToken)

    return user
  }

  logout(): Promise<string> {
    this.setAuthToken(null)

    return Promise.resolve<string>('Logged out')
  }

  private setAuthToken(authToken: string | null) {
    if (!authToken) {
      localStorage.removeItem(Config.AuthTokenKey)
      return
    }

    localStorage.setItem(Config.AuthTokenKey, authToken)
  }
}
