import { FastifyRequest } from 'fastify'
import { AuthController } from '../../src/controllers/AuthController'
import { FileProvider } from '../../src/lib/FileProvider'

describe('CategoriesController', () => {
  let target: AuthController

  describe('#login', () => {
    beforeEach(() => {
      const request = { params: { username: 'test@test.com', password: 'test' } } as unknown as FastifyRequest
      target = new AuthController()
    }),

    it('returns http status success', async () => {
        const response = await target.login()
        expect(response.status).toBe(200)
    })

    it('returns correct categories', async () => {
      const response = await target.login()
      expect(response.data).toEqual({ AuthToken: 'abcde' })
    })
  })
})
