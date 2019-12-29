import { FastifyRequest } from 'fastify'
import { ThemesController } from '../../src/controllers/ThemesController'
import { FileProvider } from '../../src/lib/FileProvider'
import { Theme } from '../../src/Models'
import dataMock from '.././mocks/themes.json'

describe('ThemesController', () => {
  let target: ThemesController
  let fileProvider = new FileProvider<Theme>(dataMock)

  beforeEach(() => {
    const request = {} as FastifyRequest

    target = new ThemesController(fileProvider, request)
  }),

  describe('#index', () => {
    it('returns http status success', async () => {
        const response = await target.index()
        expect(response.status).toBe(200)
    })

    it('returns correct Themes', async () => {
      const response = await target.index()
      expect(response.data).toEqual([ { category_id: 1219, id: 6372, name: 'Other' }, { category_id: 1218, id: 6374, name: 'General' } ])
    })
  })
})
