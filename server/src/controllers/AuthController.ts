import { BaseController } from './BaseController'

export class AuthController {
  async login (): Promise<any>  {
    try {
      if(this.username !== 'test@test.com' || this.password !== 'test') {
        throw new Error('Invalid username or password')
      }

      return this.success({ AuthToken: 'abcde' })
    } catch (e) {
      return this.error(e)
    }
  }

  private get username(): string {
    return this.params['username']
  }

  private get password(): string {
    return this.params['password']
  }
}
