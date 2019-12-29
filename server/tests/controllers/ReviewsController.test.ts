import { FastifyRequest } from 'fastify'
import { ReviewsController } from '../../src/controllers/ReviewsController'
import { FileProvider } from '../../src/lib/FileProvider'
import { Review } from '../../src/Models'
import dataMock from '.././mocks/reviews.json'

describe('ReviewsController', () => {
  let target: ReviewsController
  let fileProvider = new FileProvider<Review>(dataMock)

  beforeEach(() => {
    const request = {} as FastifyRequest

    target = new ReviewsController(fileProvider, request)
  }),

  describe('#index', () => {
    it('returns http status success', async () => {
        const response = await target.index()
        expect(response.status).toBe(200)
    })

    it('returns correct Reviews', async () => {
      const response = await target.index()
      expect(response.data).toEqual([ { id: 1218, name: 'Information' }, { id: 1219, name: 'Miscellaneous' } ])
    })
  })
})
