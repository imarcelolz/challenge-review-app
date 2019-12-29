import { FastifyRequest } from 'fastify'
import { CategoriesController } from '../../src/controllers/CategoryController'
import { FileProvider } from '../../src/lib/FileProvider'
import { Category } from '../../src/Models'
import dataMock from '.././mocks/categories.json'

describe('CategoriesController', () => {
  let target: CategoriesController
  let fileProvider = new FileProvider<Category>(dataMock)

  describe('#index', () => {
    beforeEach(() => {
      const request = {} as FastifyRequest
      target = new CategoriesController(fileProvider, request)
    }),

    it('returns http status success', async () => {
        const response = await target.index()
        expect(response.status).toBe(200)
    })

    it('returns correct categories', async () => {
      const response = await target.index()
      expect(response.data).toEqual([{id: 1218, name: 'Information'}, {id: 1219, name: 'Miscellaneous'}])
    })
  }),

  describe('#create', () => {
    beforeEach(() => {
      const request = { params: { name: 'Test Item' } } as unknown as FastifyRequest
      target = new CategoriesController(fileProvider, request)
    }),

    it('returns http status success', async () => {
        const response = await target.create()
        expect(response.status).toBe(200)
    })

    it('returns add the category to db', async () => {
      const response = await target.create()
      expect(response.data).toEqual({ name: 'Test Item' })
    })
  })

})
